import React from "react";
import "./sidebar.css"
function Sidebar() {
    return ( 
        <div className="editor-sidebar">
        <button className="sidenav-buttons">
          <i className="fas fa-play"></i> Run
        </button>
        <button className="sidenav-buttons">
          <i className="fas fa-file-import"></i> Import Problem Statement
        </button>
        <button className="sidenav-buttons">
          <i className="far fa-laptop-code"></i> File
        </button>
      </div>
     );
}

export default Sidebar;