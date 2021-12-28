import React from "react";
import axios from "axios";
import { useState } from "react";
import "./problem.css"
import Sidebar from "./sidebar";
function Problem(props) {
    const [url, setUrl] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.get("http://localhost:5000/ps?url=" + url).then((response) => {
            console.log(response.data);
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
                
            </div>
        </div >
     );
}

export default Problem;