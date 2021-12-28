import React from "react";
import axios from "axios";
import { useEffect } from "react";
export default function UserCode() {
  useEffect(() => {
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", () => {
      console.log("WORKIONGH");
      console.log(localStorage.getItem("currentUserId"))
      axios(`http://localhost:5000/usercode/${JSON.parse(localStorage.getItem("currentUserId"))}`).then(response => {
        console.log(response)
      })
    });
  }, []);
  return (
    <>
      <h1>MY CODE</h1>
      <button id="submit">SEE SAVED CODE</button>
    </>
  );
}
