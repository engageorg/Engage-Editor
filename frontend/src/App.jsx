import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DSA from "./Views/DSA";
import SignUp from "./Views/Signup/signUp";
import Login from './Views/Login/login'
function App() {
  return (
    <div>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<DSA/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
