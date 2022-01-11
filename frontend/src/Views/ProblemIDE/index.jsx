import React from "react";
import axios from "axios";
import { cfEndMarkup, cfMarkup } from "./codeforcesTemplate";
import { useDispatch, useSelector } from "react-redux";
import { updateSampleTests } from "../../actions";
import { motion } from "framer-motion/dist/framer-motion";
import EditorPS from "./editor";
import { useState } from "react";
import "./index.css";
import Split from "react-split";
import Sidebar from "../../Components/editorSidebar";

let globalUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://engage-editor-backend.herokuapp.com";

function Problem(props) {
  const dispatch = useDispatch();
  const editorLang = useSelector((state) => state.editorLang);
  const [url, setUrl] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event)
    axios.get(globalUrl + "/ps?url=" + url).then((response) => {
      dispatch(updateSampleTests(response.data.sampleTests));
      let if_data = cfMarkup + response.data.markup + cfEndMarkup;
      var ifrm = document.createElement("iframe");
      ifrm.srcdoc = if_data;
      ifrm.style.width = "100%";
      ifrm.style.height = "100%";
      document.getElementsByClassName("iframe_div")[0].innerHTML = "";
      document.getElementsByClassName("iframe_div")[0].appendChild(ifrm);
    });
  };
  return (
    <>
      <motion.div       
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }} 
        className="problem"
      >
        <Sidebar editorLang={editorLang} problemWidth={props.setWidth} />
        <div className="problem_screen">
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

            <EditorPS/>
          </Split>
        </div>
      </motion.div>
      
    </>
  );
}

export default Problem;
