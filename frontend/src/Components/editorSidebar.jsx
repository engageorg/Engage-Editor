import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { addFile, loginUser } from "../actions";
import { runCode } from "../actions/outputAction";
import { useCookies } from "react-cookie";
import Modal from 'react-modal';
import axios from "axios";
import { motion } from "framer-motion/dist/framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import "./editorSidebar.css";
import { Link } from "react-router-dom";

const env = process.env.NODE_ENV; // current environment
let url
if(env === "development") {
    url = 'http://localhost:5000'
}else{
    url = 'https://engage-editor-backend.herokuapp.com' 
}

const ModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


function Sidebar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [closeUserOption, setUserOption] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [copyUrl, setCopyUrl] = useState("");
  const file = useSelector((state) => state.file);
  const samples = useSelector((state) => state.samples);
  const inout = useSelector((state) => state.inout);
  const userName = useSelector((state) => state.user);
  const [cookies, setCookie,] = useCookies(["cookie-name"]);
  
  function openModal() {
    axios.post(url+'/share',{
      code:file.content,
      input:inout[0].content,
      output:inout[1].content
    }).then(res => {
      setCopyUrl(window.location +res.data.response._id)
    })
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleLogout = () => {
    let logoutReq = axios.get(
      url+`/logout?id=${cookies.sessId}`
    );

    const id = toast.loading("Logging you out!");

    logoutReq.then((response) => {
      console.log(response)
      if (response.data.status === 200) {
        setCookie("sessId", response.data.sessId);
        dispatch(loginUser("Engage User"));
        toast.update(id, {
          render: `See you soon, ${userName}`,
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
        navigate("/");
      } else if (response.data.status === 401) {
        toast.error(response.data.message);
      }
    });
  };

  const logButton = (user) => {
    if (user !== "Engage User") {
      return (
        <ul>
          <li>
            <button
              className="options-link logoutbutton"
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
          <li>
            <Link className="options-link" to="/usercode">
              Saved Codes
            </Link>
          </li>
          <li>
            <Link className="options-link" to="/snippet">
              Create Snippet
            </Link>
          </li>
        </ul>
      );
    }
    return (
      <ul>
        <li>
          <Link className="options-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );
  };

  const openFile = async () => {
    let fileHandle;
    [fileHandle] = await window.showOpenFilePicker();
    const file = await fileHandle.getFile();
    const contents = await file.text();
    dispatch(
      addFile({
        type: "file",
        name: file.name,
        id: nanoid(),
        children: [],
        content: contents,
      })
    );
  };

  const downloadFile = () => {
    var filename = file.name;
    var text = file.content;
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  const handleCopy = async () => {
    if (!navigator.clipboard) {
      alert("Clipboard API not available")
      toast.error("Clipboard API not available")
      return
    }
    try {
      await navigator.clipboard.writeText(copyUrl)
      toast.success("Link Copied to Clipboard")
    } catch (err) {
      toast.error('Failed to copy!', err)
    }
  }

  const codeRun = () => {
    const id = toast.loading("Running Your Code!");
    console.log(props.editorLang);
    dispatch(
      runCode(file.content, props.editorLang, inout[0].content, samples)
    ).then((e) => {
      inout[1].content = e.data.output;
      const data = {
        output: e.data.output,
      };
      const event = new CustomEvent("output", { detail: data });
      document.documentElement.dispatchEvent(event);
      toast.update(id, {
        render: "Hurry!",
        type: "success",
        isLoading: false,
        autoClose: 1000,
        closeButton: true,
      });
    });
  }

  useEffect(() => {
    let userOption = false;
    document.documentElement.addEventListener("click", (e) => {
      if(e.target.className !== 'far fa-user'){
        if (userOption === true) {
          console.log("WORKING")
          setUserOption(false)
          userOption = false;
        }
      }
    })
    document.getElementsByClassName("profile")[0].onclick = function (e) {
      if (userOption === false) {
        setUserOption(true)
        userOption = true;
      } else {
        setUserOption(false)
        userOption = false;
      }
    };
  }, []);

  return (
    <motion.div style={{zIndex:"5"}} initial={{ x: '-50px', scale: 0.8 }} animate={{ x:'0px', scale: 1 }} transition={{delay:0.1, duration: 0.1 }} className="editor-sidebar">
      <ToastContainer
        autoClose={5000}
        theme="dark"
        position="bottom-right"
        closeOnClickrtl={true}
      />

<div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={ModalStyles}
        contentLabel="Example Modal"
        overlayClassName="Overlay"
        ariaHideApp={false}
      >
        <button onClick={closeModal}>close</button>
        <input id="url_input" value={copyUrl}/>
        <button onClick={handleCopy}>Copy Url</button>
        
      </Modal>
    </div>
      <div className="upper-icons">
        <button className="run_code sidenav-buttons" data-text="Run Code" onClick={codeRun}>
          <i className="fas fa-play" style={{ color: "green" }}></i>
        </button>
        <button
          className="suprise_button sidenav-buttons"
          data-text="Import Problem Statement"
          onClick={() => {navigate('/ps');}}
        >
          <i className="fas fa-file-import"></i>
        </button>
        <button
          className="folder sidenav-buttons"
          data-text="Open File"
          onClick={openFile}
        >
          <i className="far fa-folder"></i>
        </button>
        <button
          className="download sidenav-buttons"
          data-text="Download File"
          onClick={downloadFile}
        >
          <i className="fas fa-download"></i>
        </button>
        <button
          className="share sidenav-buttons"
          data-text="Share Code's Link"
          onClick={openModal}
        >
          <i className="fas fa-share"></i>
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

      {closeUserOption ? <motion.div initial={{ x: '-50px', scale: 0.8 }} animate={{ x:'0px', scale: 1 }} transition={{type:"tween", duration: 0.1 }} className="user-option">{logButton(userName)}</motion.div>: null}
    </motion.div>
  );
}

export default Sidebar;
