import React from "react"
import axios from "axios";
import {useEffect} from "react";
export default function SignUp() {
  useEffect(() => {
    const submitButton = document.getElementById("submit");
    const userPassword = document.getElementById("password");
    const userEmail = document.getElementById("email");
    submitButton.addEventListener("click", () => {
      console.log(userEmail.value)
      console.log(userPassword.value)
      axios.post("http://localhost:5000/signup", {
        email:userEmail.value,
        password:userPassword.value,
      }).then(response => {
        if(response.data) {
          alert("Lecture Saved")
        }
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
