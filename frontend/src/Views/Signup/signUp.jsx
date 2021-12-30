import React from "react"
import axios from "axios";
import {useEffect} from "react";
export default function SignUp() {
  useEffect(() => {
    const submitButton = document.getElementById("submit");
    const userPassword = document.getElementById("password");
    const userEmail = document.getElementById("email");
    submitButton.addEventListener("click", () => {
      axios.post("http://localhost:5000/signup", {
        email:userEmail.value,
        password:userPassword.value,
      }).then(response => {
        if(response.data.status === 200) {
          localStorage.setItem("currentUserId", JSON.stringify(response.data.id))
          alert(response.data.message)
        }else if(response.data.status === 403){
          alert(response.data.error.message)
        }
      }).catch(err => {
        console.log(err)
      })
    });
  }, []);
  return (
      <>
      <input type="email" id="email" placeholder="Email" />
      <input type="password" id="password" placeholder="Password" />
      <button id="submit">Sign Up</button>
      </>
  );
}
