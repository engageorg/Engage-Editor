import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { loginUser } from "../../actions";
import './styles.css'

export default function Login() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
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
		  console.log(response)
          setCookie("sessId",response.data.sessId)
		  dispatch(loginUser(response.data.name))
          alert(response.data.message);
		  navigate("/");
        });
    });
  }, []);
  return (
    <div className="login-screen">

			<div className="row full-height justify-content-center">
				<div className="col-12 text-center align-self-center py-5">
					<div>
						<div className="card-3d-wrap mx-auto">
							<div className="card-3d-wrapper">
								<div className="card-front">
									<div className="center-wrap">
										<div className="section text-center">
											<h4 className="mb-4 pb-3">Log In</h4>
											<div className="form-group">
												<input type="email" name="logemail" className="form-style" placeholder="Your Email" id="email" autoComplete="off"/>
												<i className="input-icon uil uil-at"><i className="fas fa-at"></i></i>
											</div>	
											<div className="form-group mt-2">
												<input type="password" name="logpass" className="form-style" placeholder="Your Password" id="password" autoComplete="off"/>
												<i className="input-icon uil uil-lock-alt"><i className="fas fa-lock"></i></i>
											</div>
											<button id="submit" className="btn mt-4">submit</button>
				      					</div>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	</div>
		      	</div>
	      	</div>
    </div>
  );
}
