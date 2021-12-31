import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../../actions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [, setCookie,] = useCookies(['cookie-name']);

  useEffect(() => {
    const submitButton = document.getElementById("submit");
    const userPassword = document.getElementById("password");
    const userName = document.getElementById("username");
    const userEmail = document.getElementById("email");
    submitButton.addEventListener("click", () => {
      const id = toast.loading("Creating Your Account...");
      axios.post("http://localhost:5000/signup", {
        email:userEmail.value,
        password:userPassword.value,
        name:userName.value
      }).then(response => {
        if(response.data.status === 200) {
          localStorage.setItem("currentUserId", JSON.stringify(response.data.id))
          toast.update(id, { render: `Hi, ${userName.value}`, type: "success", isLoading: false, autoClose: 300 });
          dispatch(loginUser(response.data.name));
          let loginReq = axios.post("http://localhost:5000/login", {
            email: userEmail.value,
            password: userPassword.value,
            })
          const id_login = toast.loading("Logging you in!");
          loginReq.then((response) => {
            console.log("here")
            setCookie("sessId",response.data.sessId)
            toast.update(id_login, { render: `Welcome!`, type: "success", isLoading: false });
            navigate("/");
          });
        }else if(response.data.status === 403){
          toast.update(id, { render: ` ${response.data.error.message}`, type: "error", isLoading: false, autoClose: 5000 });
        }
      }).catch(err => {
        console.log(err)
      })
    });
  }, []);
  return (
    <>
      <div className="row full-height justify-content-center signup-screen">
        <ToastContainer/>
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
                placeholder="Username"
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
                placeholder="Email"
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
                placeholder="Password"
                id="password"
                autoComplete="off"
              />
              <i className="input-icon uil uil-lock-alt"><i className="fas fa-lock"></i></i>
            </div>
            <button id="submit" className="btn mt-4">
              Sign up!
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
