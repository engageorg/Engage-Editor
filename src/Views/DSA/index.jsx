import React from "react"
import "./index.css";
import Footer from "./footer";
import Split from "react-split";
import Problem from "./problem";
import Editor from "@monaco-editor/react";
function DSA() {

return(
    <div className="DSA">
    <Split
        sizes={[5, 65, 30]}
        minSize={0}
        expandToMin={false}
        direction="horizontal"
        cursor="col-resize"
        className="split-flex"        
    >
    <Problem/>
    <Editor
     height="calc(100vh - 2.4vh)"
     theme="vs-dark"
     defaultLanguage="javascript"
     defaultValue="// some comment"
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
           <div className="output-input-heading">Input</div>
           <textarea className="input-textarea"/>
        </div>

        <div className="output">
           <div className="output-input-heading">Output</div>
           <textarea className="output-textarea"/>
        </div>
        </Split>
    </Split>
    <Footer/>
    </div>
)

}


export default DSA