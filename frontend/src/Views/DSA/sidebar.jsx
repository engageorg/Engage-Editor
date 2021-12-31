import React, { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import { addFile } from "../../actions";
import { useCookies } from "react-cookie";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import "./sidebar.css"
import { Link } from "react-router-dom";
import { runCode } from "../../actions/outputAction";

function Sidebar() {
    const dispatch = useDispatch();
    const file = useSelector((state) => state.file);
    const inout = useSelector((state) => state.inout);
    const userName = useSelector((state) => state.user);
    const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);
    console.log(inout)
    const logButton = (user) => {
      if(user !== "Engage User"){
        return(
          <ul>
          <li><Link className="options-link" to = '/logout'>Logout</Link></li>
          <li><Link className="options-link" to = '/usercode'>Saved Codes</Link></li>
          <li><Link className="options-link" to = '/snippet'>Create Snippet</Link></li>
          </ul>

        )
      }
        return(
          <ul>
          <li><Link className="options-link" to = '/login'>Login</Link></li>
          </ul>
        )
      
    }
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

    useEffect(() => {
      
      let userOption = false;
    
      document.getElementsByClassName('profile')[0].onclick = function(e){
          if(userOption === false){
            document.getElementsByClassName('user-option')[0].style.display = "block";
            userOption = true;
          }
          else{
            document.getElementsByClassName('user-option')[0].style.display = "none";
            userOption = false;
          }
      }
      document.getElementsByClassName('run_code')[0].onclick = () => {
        const id = toast.loading("Running Your Code!");
        dispatch(runCode(file.content, file.name.split('.').pop(),inout[0].content)).then((e) => {
          inout[1].content = e.data.output
          const data = {
            output: e.data.output,
          };
          const event = new CustomEvent("output", { detail: data });
          document.documentElement.dispatchEvent(event);
          toast.update(id, { render: "All is good!", type: "success", isLoading: false , autoClose: true});
        })
      }
    }, [])

    return ( 
        <div className="editor-sidebar">
           <ToastContainer autoClose = {5000} position="bottom-right" closeOnClickrtl={true}/>
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
            <button className="profile sidenav-buttons" data-text="User Profile">
              {" "}
              <i className="far fa-user"></i>
            </button>

            <button className="settings sidenav-buttons" data-text="Settings">
              {" "}
              <i className="fas fa-cog"></i>
            </button>
          </div>

          <div className="user-option">
             {logButton()}
          </div>
      </div>
     );
}

export default Sidebar;