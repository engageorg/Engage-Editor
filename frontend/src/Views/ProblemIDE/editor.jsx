import React from "react";
import Editor from "@monaco-editor/react";
import { DSAFiles } from "../../reducers/filenameSelection";
import "./editor.css";

function EditorPS(){

    return(
        <div className="ps_editor">
         <Editor
          className="codeText"
          defaultValue={DSAFiles[0].content}
          defaultLanguage="cpp"/>
        </div>
    )
}

export default EditorPS;