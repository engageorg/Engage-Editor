import React from "react";
import { nanoid } from 'nanoid';
import { addFile } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

import "./sidebar.css"
function Sidebar() {
    const dispatch = useDispatch();
    const file = useSelector((state) => state.file);
    const openFile = async () => {
      let fileHandle
      [fileHandle] = await window.showOpenFilePicker();
      const file = await fileHandle.getFile();
      const contents = await file.text();
      dispatch(addFile({
        type: "file",
        name: file.name,
        id: nanoid(),
        children: [],
        content : contents
      }));
    }
    
    function downloadFile() {
      var filename = file.name;
      var text = file.content;
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
    
      element.style.display = 'none';
      document.body.appendChild(element);
    
      element.click();
    
      document.body.removeChild(element);
    }

    return ( 
        <div className="editor-sidebar">
          <div className="upper-icons">
          <button className="run_code sidenav-buttons" data-text="Run Code" >
              <i className="fas fa-play" style = {{color : "green"}}></i>
            </button>
            <button className="suprise_button sidenav-buttons" data-text="Import Problem Statement" >
              <i className="fas fa-file-import"></i>
            </button>
            <button className="folder sidenav-buttons" data-text="Open File" onClick = {openFile}>
              <i className="far fa-folder"></i>
            </button>
            <button className="download sidenav-buttons" data-text="Download File" onClick = {downloadFile}>
              <i className="fas fa-download"></i>
            </button>
          </div>

          <div className="lower-icons">
            <button className="output sidenav-buttons" data-text="User Profile">
              {" "}
              <i className="far fa-user"></i>
            </button>

            <button className="output sidenav-buttons" data-text="Settings">
              {" "}
              <i className="fas fa-cog"></i>
            </button>
          </div>
      </div>
     );
}

export default Sidebar;