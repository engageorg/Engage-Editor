import React, { useState, useEffect, useRef } from "react"
import "./index.css";
import Footer from "./footer";
import { addContent } from "../../actions"
import { useSelector, useDispatch } from "react-redux";
import Split from "react-split";
import { nanoid } from 'nanoid';
import Problem from "./problem";
import axios from "axios";
import Editor from "@monaco-editor/react";
let code
let name

function DSA() {
  //const [code, setCode] = useState('')

  function handleCodeChange(value) {
    code = value
  }
  
  function handleNameChange(value) {
    name = value.target.value
  }
  useEffect(() => {
    const saveButton = document.getElementById("codeSaveButton")
    saveButton.addEventListener("click", () => {
       console.log(code)
       console.log(name)
        axios.post("http://localhost:5000/codesave", {
            code:code,
            name:name,
            creator:JSON.parse(localStorage.getItem("currentUserId"))
        }).then((response) => {
          if(response.data.status === 200){
            alert("CODE SAVED")
          }
        })
    })
  })
  return (
    <div className="DSA">
      <Split
        sizes={[5, 65, 30]}
        minSize={0}
        expandToMin={false}
        direction="horizontal"
        cursor="col-resize"
        className="split-flex"
      >
        <Problem />
        <Editor
          height="calc(100vh - 2.4vh)"
          theme="vs-dark"
          onChange={handleCodeChange}
          defaultLanguage="javascript"
          value={code}
        />
        <Split
          sizes={[50, 50]}
          minSize={0}
          expandToMin={false}
          direction="vertical"
          cursor="col-resize"
          className="output-input"
        >
          <div className="input">
            <input onChange={handleNameChange} />
            <button id="codeSaveButton">Save Code</button>
            <div className="output-input-heading">Input</div>
            <textarea className="input-textarea" />
          </div>

          <div className="output">
            <div className="output-input-heading">Output</div>
            <textarea className="output-textarea" />
          </div>
        </Split>
      </Split>
      <Footer />
    </div>
  );
    const file = useSelector((state) => state.file);
    const dispatch = useDispatch();
    const editorRef = useRef(null);
    let editorLang = "cpp"
    switch (file.name.split('.').pop()) {
        case "py":
          editorLang = "python";
          break;
        case "cpp":
          editorLang = "cpp";       
          break;
        case "c":
          editorLang = "cpp";
          break;
        default:
          break;
      }
    function handleEditorChange(value) {
        file["content"] = value;
        dispatch(addContent(value));
    }

    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;
        //monaco editor custom language color
        // https://microsoft.github.io/monaco-editor/playground.html#extending-language-services-custom-language
        monaco.editor.defineTheme('ace', {
          base: 'vs',
          inherit: true,
          rules: [
            { token: '', foreground: '5c6773' },
            { token: 'invalid', foreground: 'ff3333' },
            { token: 'emphasis', fontStyle: 'italic' },
            { token: 'strong', fontStyle: 'bold' },
            { token: 'variable', foreground: '5c6773' },
            { token: 'variable.predefined', foreground: '5c6773' },
            { token: 'constant', foreground: 'f08c36' },
            { token: 'comment', foreground: 'abb0b6', fontStyle: 'italic' },
            { token: 'number', foreground: 'f08c36' },
            { token: 'number.hex', foreground: 'f08c36' },
            { token: 'regexp', foreground: '4dbf99' },
            { token: 'annotation', foreground: '41a6d9' },
            { token: 'type', foreground: '41a6d9' },
            { token: 'delimiter', foreground: '5c6773' },
            { token: 'delimiter.html', foreground: '5c6773' },
            { token: 'delimiter.xml', foreground: '5c6773' },
            { token: 'tag', foreground: 'e7c547' },
            { token: 'tag.id.jade', foreground: 'e7c547' },
            { token: 'tag.class.jade', foreground: 'e7c547' },
            { token: 'meta.scss', foreground: 'e7c547' },
            { token: 'metatag', foreground: 'e7c547' },
            { token: 'metatag.content.html', foreground: '86b300' },
            { token: 'metatag.html', foreground: 'e7c547' },
            { token: 'metatag.xml', foreground: 'e7c547' },
            { token: 'metatag.php', fontStyle: 'bold' },
            { token: 'key', foreground: '41a6d9' },
            { token: 'string.key.json', foreground: '41a6d9' },
            { token: 'string.value.json', foreground: '86b300' },
            { token: 'attribute.name', foreground: 'f08c36' },
            { token: 'attribute.value', foreground: '0451A5' },
            { token: 'attribute.value.number', foreground: 'abb0b6' },
            { token: 'attribute.value.unit', foreground: '86b300' },
            { token: 'attribute.value.html', foreground: '86b300' },
            { token: 'attribute.value.xml', foreground: '86b300' },
            { token: 'string', foreground: '86b300' },
            { token: 'string.html', foreground: '86b300' },
            { token: 'string.sql', foreground: '86b300' },
            { token: 'string.yaml', foreground: '86b300' },
            { token: 'keyword', foreground: 'f2590c' },
            { token: 'keyword.json', foreground: 'f2590c' },
            { token: 'keyword.flow', foreground: 'f2590c' },
            { token: 'keyword.flow.scss', foreground: 'f2590c' },
            { token: 'operator.scss', foreground: '666666' }, //
            { token: 'operator.sql', foreground: '778899' }, //
            { token: 'operator.swift', foreground: '666666' }, //
            { token: 'predefined.sql', foreground: 'FF00FF' }, //
          ],
          colors: {
            'editor.background': '#fafafa',
            'editor.foreground': '#5c6773',
            'editorIndentGuide.background': '#ecebec',
            'editorIndentGuide.activeBackground': '#e0e0e0',
          },
        });
    
        // monaco.editor.setTheme('ace');
    }

    return(
        <div className="DSA">
        <Split
            sizes={[4, 66, 30]}
            minSize={40}
            expandToMin={false}
            direction="horizontal"
            cursor="col-resize"
            className="split-flex"        
        >
        <Problem/>
        <Editor
            height="calc(100vh - 2.4vh)"
            theme="vs-dark"
            defaultLanguage={editorLang}
            defaultValue={file.content}
            value={file.content}
            onMount={handleEditorDidMount}
            onChange={handleEditorChange}
        />
            <Split
                sizes={[50, 50]}
                minSize={30}
                expandToMin={false}
                direction="vertical"
                cursor="col-resize"
                className="output-input"   
            >
            <div className="input">
            <div className="output-input-heading">Input</div>
            <textarea className="input-textarea"/>
            </div>

            <div className="output">
            <div className="output-input-heading">Output</div>
            <textarea className="output-textarea"/>
            </div>
            </Split>
        </Split>
        <Footer fileName = {file.name} editorLang = {editorLang}/>
        </div>
    )

}

export default DSA;
