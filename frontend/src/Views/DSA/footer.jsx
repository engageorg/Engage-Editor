import React from "react";
import "./footer.css"
function Footer() {
    return ( 
        <footer className="texteditor_footer">
        <div className="side_footer">
          <span className="footer_text l_footer">
            <i className="fas fa-file-code"></i> <input className="file-name" defaultValue={"main.cpp"}/>
          </span>
          <span className="footer_text l_footer error">
            <i className="far fa-times-circle"></i>
            {"  "} 0
          </span>
          <span className="footer_text l_footer warnings">
            <i className="fas fa-exclamation-triangle"></i> {"  "}0
          </span>
        </div>
        <div className="side_footer">
          <span className="footer_text r_footer line-col-num">{"Ln ${Ln}, Col ${Col}"}</span>
          <span className="footer_text r_footer">Layout: US</span>
          <span className="footer_text r_footer language">
            <i className="fab fa-markdown"></i> editorLang
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