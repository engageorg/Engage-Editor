import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Editor from "@monaco-editor/react";
import { motion } from "framer-motion/dist/framer-motion";
import { DSAFiles } from "../../reducers/filenameSelection";
import "./editor.css";

function EditorPS(){
    const [divInout, setDivInout] = useState(false);
    const samples = useSelector((state) => state.samples);
    const [psInput, setpsInput] = useState("Please Import Problem Statement to see input here");
    const [psOutput, setpsOutput] = useState("Please Import Problem Statement to see Expected Output here");
    useEffect(() => {
      if(document.getElementsByClassName("inoutTextarea")[0]){
        document.getElementsByClassName("inoutTextarea")[0].scrollIntoView();
      }
    }, [divInout])
    return(
      <div style={{overflow:"auto", height: "calc(100vh - 2.4vh)"}}>
        <div className="ps_editor">
          <Editor
            width="95%"
            height="95vh"
            className="codeText ps_monaco"
            defaultValue={DSAFiles[0].content}
            defaultLanguage="cpp"/>

          <div className="ps_editor_buttons">
            <button className="btn" onClick = {() => { setDivInout(true); }} style={{marginRight:"10px"}}>Input</button>
            <button className="btn"onClick = {() => { setDivInout(true); }} >Expected Output</button>
          </div>
        </div>
        {divInout ? 
          <motion.div         
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type:"tween",duration: 0.2 }} 
          className="inoutTextarea">
            {
              samples.map((d) => {
                return(
                  console.log(d)
                )
              })
            }
             <textarea className="ps_inout" onChange={setpsInput} value={psInput}/>
             <textarea className="ps_inout" onChange={setpsOutput} value={psOutput}/>
          </motion.div> : ""}
        </div>
    )
}

export default EditorPS;