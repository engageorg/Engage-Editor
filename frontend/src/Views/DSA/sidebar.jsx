import React from "react";
import { nanoid } from 'nanoid';
import { addFile } from "../../actions";
import { useDispatch } from "react-redux";
import "./sidebar.css"
function Sidebar() {
    
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
    return ( 
        <div className="editor-sidebar">
          <div className="upper-icons">
            <button className="suprise_button sidenav-buttons">
              <i className="fas fa-file-import"></i>
            </button>
            <button className="folder sidenav-buttons" onClick = {openFile}>
              <i className="far fa-folder"></i>
            </button>
            <button className="full sidenav-buttons" >
              <i className="fas fa-expand-arrows-alt"></i>
            </button>
            <button className="full sidenav-buttons" >
              <i className="fas fa-search"></i>
            </button>
            <button className="output sidenav-buttons">
              {" "}
              <i className="fas fa-chalkboard-teacher"></i>
            </button>
          </div>

          <div className="lower-icons">
            <button className="output sidenav-buttons">
              {" "}
              <i className="far fa-user"></i>
            </button>

            <button className="output sidenav-buttons">
              {" "}
              <i className="fas fa-cog"></i>
            </button>
          </div>
      </div>
     );
}

export default Sidebar;