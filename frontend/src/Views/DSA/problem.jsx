import React from "react";
import axios from "axios";
import { useState } from "react";
import "./problem.css"
import Sidebar from "./sidebar";
function Problem(props) {
    const [url, setUrl] = useState('')
    const [screenData, setScreenData] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.get("http://localhost:5000/ps?url=" + url).then((response) => {
            setScreenData(response.data);
        })
    }
    return ( 
        <div className="problem">
            <Sidebar problemWidth = {props.setWidth}/>
            <div className="problem_screen">
                <form onSubmit={handleSubmit}>
                   <input className="url_input" onChange={(event) => {setUrl(event.target.value)}} value={url}/>
                   <input type="submit" value="Submit" />
                </form>
            <p style={{color : "white"}}>{screenData.title}</p>
            <p style={{color : "white"}}>{screenData.time_limit}</p>
            <p style={{color : "white"}}>{screenData.memory_limit}</p>
            <p style={{color : "white"}}>{screenData.problem_statement}</p>
            <p style={{color : "white"}}>{screenData.input_specifications}</p>
            <p style={{color : "white"}}>{screenData.output_specifications}</p>      
            </div>
        </div >
     );
}

export default Problem;