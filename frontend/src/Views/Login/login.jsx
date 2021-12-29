import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

export default function Login() {
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  useEffect(() => {
    const submitButton = document.getElementById("submit");
    const userPassword = document.getElementById("password");
    const userEmail = document.getElementById("email");
    submitButton.addEventListener("click", () => {
      console.log(userEmail.value);
      console.log(userPassword.value);
      axios
        .post("http://localhost:5000/login", {
          email: userEmail.value,
          password: userPassword.value,
        })
        .then((response) => {
          setCookie("sessId",response.data.sessId)
          alert(response.data.message);
        });
    });
  }, []);
  return (
    <>
      <input type="email" id="email" placeholder="Email" />
      <input type="password" id="password" placeholder="Password" />
      <button id="submit">Login</button>
    </>
  );
}
