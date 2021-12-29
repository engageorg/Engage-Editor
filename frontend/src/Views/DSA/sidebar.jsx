import React from "react";
import { nanoid } from 'nanoid';
import { addFile } from "../../actions";
import { useDispatch } from "react-redux";
import "./sidebar.css"
function Sidebar(props) {
    
    const dispatch = useDispatch();
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
    const handlePSWidth = () => {
      console.log("clicked")
    }
    return ( 
        <div className="editor-sidebar">
          <div className="upper-icons">
          <button className="run_code sidenav-buttons" data-text="Run Code" >
              <i className="fas fa-play" style = {{color : "green"}}></i>
            </button>
            <button className="suprise_button sidenav-buttons" onClick={handlePSWidth} data-text="Import Problem Statement" >
              <i className="fas fa-file-import"></i>
            </button>
            <button className="folder sidenav-buttons" data-text="Open File" onClick = {openFile}>
              <i className="far fa-folder"></i>
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