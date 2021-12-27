import React, { useState, useEffect } from "react";
import "./index.css";
import Footer from "./footer";
import Split from "react-split";
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
}

export default DSA;
