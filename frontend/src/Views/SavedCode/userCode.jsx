import React from "react";
import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Table from "../Table/savedCodeTable";
const userCode = []

export default function UserCode() {
  const [codeInfo, setCodeInfo] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  useEffect(() => {
    // const submitButton = document.getElementById("openCode");
    // submitButton.addEventListener("click", () => {
    //   console.log("WORKIONGH");
    //   console.log(localStorage.getItem("currentUserId"));
    //   axios(
    //     `http://localhost:5000/usercode/${JSON.parse(
    //       localStorage.getItem("currentUserId")
    //     )}`
    //   ).then((response) => {
    //     setCodeInfo(response.data.code);
    //     response.data.code.forEach(code => {
    //       userCode.push({no:code._id, name:code.name,language:code.language,createdAt:code.createdAt})
    //     })
    //     console.log(userCode)
    //   });
    // })
   (() => {
      axios(
        `http://localhost:5000/usercode/${cookies.sessId}`
      ).then((response) => {
        response.data.code.forEach((code, index) => {
          userCode.push({code:code.code,no:index+1,id:code._id, name:code.name,language:code.language,createdAt:code.createdAt})
        })
        console.log(userCode)
        setCodeInfo(userCode);
      });
    })()
    const openButton = document.getElementsByClassName("openCode")[0]
    console.log(openButton)
    // openButton.addEventListener("click", (e) => {
    //   console.log(e.target.id)
    // })
  }, []);
  //console.log(codeInfo)
  return (
    <>
      <h1>MY CODE</h1>
      <Table savedCode={codeInfo}/>
      {/* {codeInfo.map((lecture) => {
        return (
          <>
            <div className="lectureRow">
            <div>
            <h1 id={lecture.no}>{lecture.no}</h1>
              <h1 id={lecture.no}>{lecture.name}</h1>
              <h1 id={lecture.no}>{lecture.language}</h1>
              <h1 id={lecture.no}>{lecture.createdAt}</h1>
              <button className="openCode" id={lecture.no}>OPEN</button>
            </div>
            </div>
          </>
        );
      })} */}
    </>
  );
}
