import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { changeFileName, savefile } from "../../actions";
import "./footer.css";

function Footer(props) {
    const [fileName, setFileName] = useState(props.fileName);
    const dispatch = useDispatch();
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

    // useEffect(() => {
    //   const listenSaveEvent = (event) => {
    //     console.log(event)
    //     if (event.ctrlKey || event.code === 'KeyS') {
    //           event.preventDefault();
    //           console.log("sfsf")
    //           alert('ctrl-s');
    //     }
    //   }
    //   document.addEventListener("keypress", listenSaveEvent)

    //   return(
    //     document.removeEventListener("keypress", listenSaveEvent)
    //   )
    // }, [])

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
          <span className="footer_text r_footer line-col-num">{"Ln ${Ln}, Col ${Col}"}</span>
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