import React from "react";
import "./sidebar.css"
function Sidebar() {
    return ( 
        <div className="editor-sidebar">
        <button className="suprise_button sidenav-buttons">
          <i className="fas fa-file-import"></i>
        </button>
        <button className="folder sidenav-buttons">
          <i className="far fa-folder"></i>
        </button>
        <button className="full sidenav-buttons" >
          <i className="fas fa-expand-arrows-alt"></i>
        </button>
        <button className="full sidenav-buttons">
          <i className="fas fa-search"></i>
        </button>
        <button className="output sidenav-buttons">
          {" "}
          <i className="fas fa-chalkboard-teacher"></i>
        </button>
      </div>
     );
}

export default Sidebar;