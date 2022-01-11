import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Editor from "@monaco-editor/react";
import Footer from "../../Components/editorFooter";
import { addContent, changeLang } from "../../actions";
import { motion } from "framer-motion/dist/framer-motion";
import { DSAFiles } from "../../reducers/filenameSelection";
import "./editor.css";

function EditorPS(){
    console.log("WORKING")
    const [divInout, setDivInout] = useState(false);
    const file = useSelector((state) => state.file);
    const editorLang = useSelector((state) => state.editorLang);
    const editorRef = useRef(null);
    const samples = useSelector((state) => state.samples);
    const testOutput = useSelector((state) => state.testOutput);
    const dispatch = useDispatch();
    const [psInput, setpsInput] = useState("Please Import Problem Statement to see input here");
    const [psOutput, setpsOutput] = useState("Please Import Problem Statement to see Expected Output here");
    const [yrOutput, setyrOutput] = useState("Your Output");
    const [exOutput, setexOutput] = useState("Expected Output");
    let snippet;
    switch (file.name.split(".").pop()) {
      case "py":
        dispatch(changeLang("python"));
        break;
      case "cpp":
        dispatch(changeLang("cpp"));
        break;
      case "c":
        dispatch(changeLang("cpp"));
        break;
      case "js":
        dispatch(changeLang("javascript"));
        break;
      case "jsx":
        dispatch(changeLang("javascript"));
        break;
      case "java":
        dispatch(changeLang("java"));
        break;
      default:
        break;
    }

    function handleEditorChange(value) {
      dispatch(addContent(value));
    }

    function handleEditorDidMount(editor, monaco) {
      editorRef.current = editor;
      //monaco editor custom language color
      // https://microsoft.github.io/monaco-editor/playground.html#extending-language-services-custom-language
      if (
        localStorage.getItem("description") &&
        localStorage.getItem("tabtrigger") &&
        localStorage.getItem("snippet")
      ) {
        const description = localStorage.getItem("description");
        const labeltrigger = localStorage.getItem("tabtrigger");
        snippet = localStorage.getItem("snippet");
        monaco.languages.registerCompletionItemProvider("javascript", {
          provideCompletionItems: () => {
            return {
              suggestions: [
                {
                  label: labeltrigger,
                  kind: monaco.languages.CompletionItemKind.Snippet,
                  documentation: description,
                  insertText: [`${snippet}`].join("\n"),
                },
              ],
            };
          },
        });
      }
  
      monaco.editor.defineTheme("ace", {
        base: "vs",
        inherit: true,
        rules: [
          { token: "", foreground: "5c6773" },
          { token: "invalid", foreground: "ff3333" },
          { token: "emphasis", fontStyle: "italic" },
          { token: "strong", fontStyle: "bold" },
          { token: "variable", foreground: "5c6773" },
          { token: "variable.predefined", foreground: "5c6773" },
          { token: "constant", foreground: "f08c36" },
          { token: "comment", foreground: "abb0b6", fontStyle: "italic" },
          { token: "number", foreground: "f08c36" },
          { token: "number.hex", foreground: "f08c36" },
          { token: "regexp", foreground: "4dbf99" },
          { token: "annotation", foreground: "41a6d9" },
          { token: "type", foreground: "41a6d9" },
          { token: "delimiter", foreground: "5c6773" },
          { token: "delimiter.html", foreground: "5c6773" },
          { token: "delimiter.xml", foreground: "5c6773" },
          { token: "tag", foreground: "e7c547" },
          { token: "tag.id.jade", foreground: "e7c547" },
          { token: "tag.class.jade", foreground: "e7c547" },
          { token: "meta.scss", foreground: "e7c547" },
          { token: "metatag", foreground: "e7c547" },
          { token: "metatag.content.html", foreground: "86b300" },
          { token: "metatag.html", foreground: "e7c547" },
          { token: "metatag.xml", foreground: "e7c547" },
          { token: "metatag.php", fontStyle: "bold" },
          { token: "key", foreground: "41a6d9" },
          { token: "string.key.json", foreground: "41a6d9" },
          { token: "string.value.json", foreground: "86b300" },
          { token: "attribute.name", foreground: "f08c36" },
          { token: "attribute.value", foreground: "0451A5" },
          { token: "attribute.value.number", foreground: "abb0b6" },
          { token: "attribute.value.unit", foreground: "86b300" },
          { token: "attribute.value.html", foreground: "86b300" },
          { token: "attribute.value.xml", foreground: "86b300" },
          { token: "string", foreground: "86b300" },
          { token: "string.html", foreground: "86b300" },
          { token: "string.sql", foreground: "86b300" },
          { token: "string.yaml", foreground: "86b300" },
          { token: "keyword", foreground: "f2590c" },
          { token: "keyword.json", foreground: "f2590c" },
          { token: "keyword.flow", foreground: "f2590c" },
          { token: "keyword.flow.scss", foreground: "f2590c" },
          { token: "operator.scss", foreground: "666666" }, //
          { token: "operator.sql", foreground: "778899" }, //
          { token: "operator.swift", foreground: "666666" }, //
          { token: "predefined.sql", foreground: "FF00FF" }, //
        ],
        colors: {
          "editor.background": "#fafafa",
          "editor.foreground": "#5c6773",
          "editorIndentGuide.background": "#ecebec",
          "editorIndentGuide.activeBackground": "#e0e0e0",
        },
      });
  
      // monaco.editor.setTheme('ace');
    }

    useEffect(() => {
      if(document.getElementsByClassName("inoutTextarea")[0]){
        if(samples[0].i1 !== ""){
          setpsInput(samples[0].i1 + samples[1].i2 + samples[2].i3);
          setpsOutput(samples[0].o1 + " " + samples[1].o2 + " " + samples[2].o3);
        }
        document.getElementsByClassName("inoutTextarea")[0].scrollIntoView();
      }
    }, [divInout, samples])
 
    return(
      <div style={{overflow:"auto", height: "calc(100vh - 2.4vh)"}}>
        <div className="ps_editor">
          <Editor
            width="100%"
            height="95vh"
            theme="vs-dark"
            className="codeText ps_monaco"
            defaultValue={DSAFiles[0].content}
            onMount={handleEditorDidMount}
            onChange={handleEditorChange}
            defaultLanguage="cpp"/>

          <div className="ps_editor_buttons">
            <button className="btn" onClick = {() => { setDivInout(true); }} style={{marginRight:"10px"}}>Edit/View Test cases</button>
            <button className="btn" onClick = {() => { setDivInout(true); }} style={{backgroundColor:"green", color:"white !important"}}>Run test cases</button>
          </div>
        </div>
        {divInout ? 
          <motion.div         
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type:"tween", duration: 0.2 }} 
          className="inoutTextarea">
             <textarea className="ps_inout" onChange={setpsInput} value={psInput}/>
             <textarea className="ps_inout" onChange={setpsOutput} value={psOutput}/>
          </motion.div> : ""}
          <textarea style={{width:"900px"}} defaultValue="success" readOnly/>
          <motion.div         
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type:"tween", duration: 0.2 }} 
          className="inoutTextarea">
             <textarea className="ps_inout" defaultValue={yrOutput}/>
             <textarea className="ps_inout" defaultValue={exOutput}/>
          </motion.div> 
          <Footer fileName={file.name} editor={editorRef} editorLang={editorLang} />
        </div>
    )
}

export default EditorPS;