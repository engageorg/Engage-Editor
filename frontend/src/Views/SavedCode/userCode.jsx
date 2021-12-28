import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
export default function UserCode() {
  const [codeInfo, setCodeInfo] = useState([]);
  useEffect(() => {
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", () => {
      console.log("WORKIONGH");
      console.log(localStorage.getItem("currentUserId"));
      axios(
        `http://localhost:5000/usercode/${JSON.parse(
          localStorage.getItem("currentUserId")
        )}`
      ).then((response) => {
        setCodeInfo(response.data.code);
      });
    });
  }, []);
  return (
    <>
      <h1>MY CODE</h1>
      <button id="submit">SEE SAVED CODE</button>
      {codeInfo.map((lecture) => {
        return (
          <>
            <h1>{lecture.name}</h1>
            <h1>{lecture.language}</h1>
            <h1>{lecture.createdAt}</h1>
          </>
        );
      })}
    </>
  );
}
