import React, { useRef } from "react";
import axios from "axios";
import { cfEndMarkup, cfMarkup } from "./codeforcesTemplate";
import { useSelector, useDispatch } from "react-redux";
import { DSAFiles } from "../../reducers/filenameSelection";
import Editor from "@monaco-editor/react";
import Footer from "./footer";
import { useState } from "react";
import "./problem.css";
import Split from "react-split";
import Sidebar from "./sidebar";

let globalUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://engage-editor-backend.herokuapp.com";

function Problem(props) {
  const file = useSelector((state) => state.file);
  const editorLang = useSelector((state) => state.editorLang);
  const editorRef = useRef(null);
  const [url, setUrl] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get(globalUrl + "/ps?url=" + url).then((response) => {
      let if_data = cfMarkup + response.data.markup + cfEndMarkup;
      var ifrm = document.createElement("iframe");
      ifrm.srcdoc = if_data;
      ifrm.style.width = "100%";
      ifrm.style.height = "90vh";
      document.getElementsByClassName("iframe_div")[0].innerHTML = "";
      document.getElementsByClassName("iframe_div")[0].appendChild(ifrm);
    });
  };
  return (
    <>
      <div className="problem">
        <Sidebar problemWidth={props.setWidth} />
        <div className="problem_screen">
          {/* <p style={{color : "white"}}>{screenData.title}</p>
            <p style={{color : "white"}}>{screenData.time_limit}</p>
            <p style={{color : "white"}}>{screenData.memory_limit}</p>
            <p style={{color : "white"}}>{screenData.problem_statement}</p>
            <p style={{color : "white"}}>{screenData.input_specifications}</p>
            <p style={{color : "white"}}>{screenData.output_specifications}</p> 
                  */}
          {/* <html className="codeforces_data" dangerouslySetInnerHTML={{__html: screenData.markup}} ></html> */}
          <Split
            sizes={[50, 50]}
            minSize={20}
            expandToMin={false}
            direction="horizontal"
            cursor="col-resize"
            className="split-flex"
          >
            <div className="iframe_div">
              <form onSubmit={handleSubmit}>
                <input
                  className="url_input"
                  onChange={(event) => {
                    setUrl(event.target.value);
                  }}
                  value={url}
                />
                <input type="submit" value="Submit" />
              </form>
              <h1>Insert problem statement link,above to show here</h1>
            </div>
            <Editor
              height="calc(100vh - 2.4vh)"
              theme="vs-dark"
              language="cpp"
              defaultValue={DSAFiles[0].content}
              className="codeText"
            />
          </Split>
        </div>
      </div>
      <Footer fileName={file.name} editor={editorRef} editorLang={editorLang} />
    </>
  );
}

export default Problem;
