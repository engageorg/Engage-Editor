import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFileName, savefile } from "../../actions";
import { motion } from "framer-motion/dist/framer-motion";
import "react-toastify/dist/ReactToastify.css";
import { useCookies } from "react-cookie";
import "./footer.css";

function Footer(props) {
  const [fileName, setFileName] = useState(props.fileName);
  const dispatch = useDispatch();
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

  const handleLanguageChange = (lang) => {
    console.log(lang);
  };

  useEffect(() => {
    setFileName(props.fileName);
  }, [props.fileName]);

  useEffect(() => {
    let isCtrl = false,
      langOptions = false;
    document
      .getElementsByClassName("change_lang")[0]
      .addEventListener("click", () => {
        if (langOptions === false) {
          document.getElementsByClassName("language-options")[0].style.display =
            "flex";
          langOptions = true;
        } else {
          document.getElementsByClassName("language-options")[0].style.display =
            "none";
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
      setLn(props.editor.current.getPosition().lineNumber);
      setCol(props.editor.current.getPosition().column);
    });
  }, []);

  return (
    <motion.footer
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

        <div className="language-options">
          <button className="language-buttons" onClick={handleLanguageChange}>
            C++
          </button>
          <button className="language-buttons" onClick={handleLanguageChange}>
            Python3
          </button>
          <button className="language-buttons" onClick={handleLanguageChange}>
            Java
          </button>
        </div>
      </div>
      <div className="side_footer">
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
