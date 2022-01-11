import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFileName, savefile, addFile } from "../actions";
import { DSAFiles } from "../reducers/filenameSelection";
import { motion } from "framer-motion/dist/framer-motion";
import "react-toastify/dist/ReactToastify.css";
import { useCookies } from "react-cookie";
import axios from "axios";
import "./editorFooter.css";
const env = process.env.NODE_ENV; // current environment
let url
if(env === "development") {
    url = 'http://localhost:5000'
}else{
    url = 'https://engage-editor-backend.herokuapp.com' 
}


//let closeLangOption = false
function Footer(props) {
  const [fileName, setFileName] = useState(props.fileName);
  const dispatch = useDispatch();
  const [closeLangOption, setLangOption] = useState(false)
  const inout = useSelector((state) => state.inout);
  const [cookies] = useCookies(["cookie-name"]);
  const [Ln, setLn] = useState(1);
  const [Col, setCol] = useState(1);
  const file = useSelector((state) => state.file);
  const userName = useSelector((state) => state.user);
  
  const handleNameChange = (event) => {
    setFileName(event.target.value);
    dispatch(changeFileName(event.target.value));
  };

  const handleFileSave = () => {
    dispatch(savefile(file, cookies.sessId));
  };

  const handleShareFile = (e) => {
    axios.post(url+'/share',{
      code:file.content,
      input:inout[0].content,
      output:inout[1].content
    }).then(res => {
      console.log('http://localhost:3000/'+res.data.response._id)
    })
  };

  useEffect(() => {
    setFileName(props.fileName);
  }, [props.fileName]);

  useEffect(() => {
    let isCtrl = false,
      langOptions = false;
    document.documentElement.addEventListener("click", (e) => {
      if(e.target.className !== 'footer_text l_footer change_lang'){
        if (langOptions === true) {
          console.log("WORKING")
          setLangOption(false)
          langOptions = false;
        }
      }
    })
    document
      .getElementsByClassName("change_lang")[0]
      .addEventListener("click", () => {
        if (langOptions === false) {
          setLangOption(true)
          langOptions = true;
        } else {
          setLangOption(false)
          langOptions = false;
        }
      });
    document.onkeyup = function (e) {
      if (e.key === "Control") isCtrl = false;
    };
    document.onkeydown = function (e) {
      if (e.key === "Control") isCtrl = true;
      if (e.key === "s" && isCtrl === true) {
        dispatch(savefile(file, cookies.sessId));
        return false;
      }
    };
    const codeText = document.getElementsByClassName("codeText")[0];
    codeText.addEventListener("keyup", function () {
      //commented because creating error in ps screen
      //setLn(props.editor.current.getPosition().lineNumber);
      //setCol(props.editor.current.getPosition().column);
    });
  }, []);

  return (
    <motion.footer
      style={{zIndex:"6"}}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      className="texteditor_footer"
    >
      <div className="side_footer">
        <span className="footer_text l_footer">
          <i className="far fa-user"></i> {userName}
        </span>
        <span className="footer_text l_footer">
          <i className="fas fa-file-code"></i>{" "}
          <input
            className="file-name"
            onChange={handleNameChange}
            value={fileName}
          />
        </span>
        <span className="footer_text l_footer error" onClick={handleFileSave}>
          <i className="far fa-save"></i> Save code
        </span>
        <span className="footer_text l_footer change_lang">
          <i className="fas fa-code"></i> Change Programming Language
        </span>
        {closeLangOption? <div className="language-options">
          <button className="language-buttons" onClick={() => {dispatch(addFile(DSAFiles[0]))}}>
            C++
          </button>
          <button className="language-buttons" onClick={() => {dispatch(addFile(DSAFiles[1]))}}>
            Python
          </button>
          <button className="language-buttons" onClick={() => {dispatch(addFile(DSAFiles[3]))}}>
            Java
          </button>
        </div> : ''}
      </div>
      <div className="side_footer">
      <span className="footer_text r_footer line-col-num" onClick={handleShareFile}>Share</span>
        <span className="footer_text r_footer line-col-num">{`Ln ${Ln}, Col ${Col}`}</span>
        <span className="footer_text r_footer">Layout: US</span>
        <span className="footer_text r_footer language">
          <i className="fas fa-terminal"></i> {props.editorLang}
        </span>
        <span className="footer_text r_footer">CRLF</span>
        <span className="footer_text r_footer">UTF-8</span>
      </div>
    </motion.footer>
  );
}

export default Footer;
