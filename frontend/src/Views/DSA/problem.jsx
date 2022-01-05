import React from "react";
import axios from "axios";
import Editor from "@monaco-editor/react";
import { useState } from "react";
import "./problem.css";

import Split from "react-split";
import Sidebar from "./sidebar";
function Problem(props) {
    const [url, setUrl] = useState('')
    const [screenData, setScreenData] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.get("http://localhost:5000/ps?url=" + url).then((response) => {
            setScreenData(response.data);
            console.log(screenData.markup);
        })
        var frame =
        document.getElementsByClassName("ps_iframe")[0].contentDocument;
        frame.body.innerHTML = screenData.markup;
        frame.location.reload(true);
    }
    return ( 
        <div className="problem">
            <Sidebar problemWidth = {props.setWidth}/>
            <div className="problem_screen">
                <form onSubmit={handleSubmit}>
                   <input className="url_input" onChange={(event) => {setUrl(event.target.value)}} value={url}/>
                   <input type="submit" value="Submit" />
                </form>
            {/* <p style={{color : "white"}}>{screenData.title}</p>
            <p style={{color : "white"}}>{screenData.time_limit}</p>
            <p style={{color : "white"}}>{screenData.memory_limit}</p>
            <p style={{color : "white"}}>{screenData.problem_statement}</p>
            <p style={{color : "white"}}>{screenData.input_specifications}</p>
            <p style={{color : "white"}}>{screenData.output_specifications}</p> 
                  */}
                {/* <div className="codeforces_data" dangerouslySetInnerHTML={{__html: screenData.markup}} /> */}
                <Split
                    sizes={[80, 20]}
                    minSize={20}
                    expandToMin={false}
                    direction="horizontal"
                    cursor="col-resize"
                    className="split-flex"
                >
                <iframe className="ps_iframe"title="problemscreen" src="./problemscreen.html"/>
                <Editor
                    height="calc(100vh - 2.4vh)"
                    theme="vs-dark"
                    language="c++"
                    className="codeText"
                />
                </Split>
            </div>
        </div >
     );
}

export default Problem;