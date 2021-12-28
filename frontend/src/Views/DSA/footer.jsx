import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { changeFileName, savefile } from "../../actions";
import "./footer.css";

function Footer(props) {
    const [fileName, setFileName] = useState(props.fileName);
    const dispatch = useDispatch();
    const [Ln, setLn] = useState(1);
    const [Col, setCol] = useState(1);
    const file = useSelector((state) => state.file);
    const handleNameChange = (event) => {
      setFileName(event.target.value)
      dispatch(changeFileName(event.target.value));
    }

    const handleFileSave = () => {
      dispatch(savefile(file));
    }

    useEffect(() => {
      setFileName(props.fileName)
    }, [props.fileName])

    useEffect(() => {

      var isCtrl = false;
      document.onkeyup=function(e){
        if(e.key === 'Control') isCtrl=false;
        }

      document.onkeydown=function(e){
        if(e.key === 'Control') isCtrl=true;
        if(e.key === 's' && isCtrl === true) {
          dispatch(savefile(file));
          return false;
        }
      }
      const codeText = document.getElementsByClassName("codeText")[0];
      codeText
      .addEventListener("keyup", function () {
        setLn(props.editor.current.getPosition().lineNumber);
        setCol(props.editor.current.getPosition().column);
      });
    }, [])

    return ( 
        <footer className="texteditor_footer">
        <div className="side_footer">
          <span className="footer_text l_footer">
            <i className="fas fa-file-code"></i> <input className="file-name" onChange = {handleNameChange} value={fileName}/>
          </span>
          <span className="footer_text l_footer error" onClick={handleFileSave}>
            <i className="far fa-save"></i>{" "}
            Save code
          </span>
        </div>
        <div className="side_footer">
          <span className="footer_text r_footer line-col-num">{`Ln ${Ln}, Col ${Col}`}</span>
          <span className="footer_text r_footer">Layout: US</span>
          <span className="footer_text r_footer language">
            <i className="fab fa-markdown"></i> {props.editorLang}
          </span>
          <span className="footer_text r_footer">CRLF</span>
          <span className="footer_text r_footer">UTF-8</span>
          <span className="footer_text r_footer console-button">
            <i className="fas fa-terminal"></i> someoption
          </span>
        </div>
      </footer>
     );
}

export default Footer;