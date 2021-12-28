import React from "react";
import "./problem.css"
import Sidebar from "./sidebar";
function Problem(props) {
    return ( 
        <div className="problem">
            <Sidebar problemWidth = {props.setWidth}/>
        </div >
     );
}

export default Problem;