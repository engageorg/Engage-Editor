import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../../actions";
import { useEffect } from "react";
export default function SignUp() {
  const dispatch = useDispatch();

  useEffect(() => {
    const submitButton = document.getElementById("submit");
    const userPassword = document.getElementById("password");
    const userName = document.getElementById("username");
    const userEmail = document.getElementById("email");
    submitButton.addEventListener("click", () => {
      axios.post("http://localhost:5000/signup", {
        email:userEmail.value,
        password:userPassword.value,
        name:userName.value
      }).then(response => {
        if(response.data.status === 200) {
          localStorage.setItem("currentUserId", JSON.stringify(response.data.id))
          alert(response.data.message)
          dispatch(loginUser("Chanel Preston"));
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
      <div className="row full-height justify-content-center">
        <div className="col-12 text-center align-self-center py-5">
          <div>
            <div className="card-3d-wrap mx-auto">
              <div className="card-3d-wrapper">
              <div className="card-front">
        <div className="center-wrap">
          <div className="section text-center">
            <h4 className="mb-4 pb-3">Sign Up</h4>
            <div className="form-group">
              <input
                type="text"
                name="logname"
                className="form-style"
                placeholder="Your Full Name"
                id="username"
                autoComplete="off"
              />
              <i className="input-icon uil uil-user"><i className="fas fa-user"></i></i>
            </div>
            <div className="form-group mt-2">
              <input
                type="email"
                name="logemail"
                className="form-style"
                placeholder="Your Email"
                id="email"
                autoComplete="off"
              />
              <i className="input-icon uil uil-at"><i className="fas fa-at"></i></i>
            </div>
            <div className="form-group mt-2">
              <input
                type="password"
                name="logpass"
                className="form-style"
                placeholder="Your Password"
                id="password"
                autoComplete="off"
              />
              <i className="input-icon uil uil-lock-alt"><i className="fas fa-lock"></i></i>
            </div>
            <button id="submit" className="btn mt-4">
              submit
            </button>
          </div>
        </div>
      </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
