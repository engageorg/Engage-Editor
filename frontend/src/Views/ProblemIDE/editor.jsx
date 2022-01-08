import React from "react";
import Editor from "@monaco-editor/react";
import { DSAFiles } from "../../reducers/filenameSelection";
import "./editor.css";

function EditorPS(){

    return(
        <div className="ps_editor">
         <Editor
          width="95%"
          height="95%"
          className="codeText ps_monaco"
          defaultValue={DSAFiles[0].content}
          defaultLanguage="cpp"/>
          <div className="ps_editor_buttons">
            <button className="btn" style={{marginRight:"10px"}}>Input</button>
            <button className="btn">Expected Output</button>
          </div>
        </div>
    )
}

export default EditorPS;