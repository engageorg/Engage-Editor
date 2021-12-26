import React from "react"
import axios from "axios";
import {useEffect} from "react";
export default function Login() {
  useEffect(() => {
    const submitButton = document.getElementById("submit");
    const userPassword = document.getElementById("password");
    const userEmail = document.getElementById("email");
    submitButton.addEventListener("click", () => {
      console.log(userEmail.value)
      console.log(userPassword.value)
      axios.post("http://localhost:5000/login", {
        email:userEmail.value,
        password:userPassword.value,
      }).then(response => {
        console.log(response)
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
