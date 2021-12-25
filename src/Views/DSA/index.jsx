import React from "react"
import "./index.css";
import Sidebar from "./sidebar";
import Footer from "./footer";
import Split from "react-split";
import Problem from "./problem";
import Editor from "@monaco-editor/react";
function DSA() {

return(
    <div className="DSA">
    <Sidebar/>
    <Split
          sizes={[65, 35]}
          direction="horizontal"
          cursor="col-resize"
          className="split-flex"        
    >
    <Problem/>
    <Editor
     height="calc(100vh - 2.4vh - 40px)"
     theme="vs-dark"
     defaultLanguage="javascript"
     defaultValue="// some comment"
    />
    </Split>
    <Footer/>
    </div>
)

}


export default DSA