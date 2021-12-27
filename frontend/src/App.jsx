import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import allReducer from "./reducers";
import DSA from "./Views/DSA";
import SignUp from "./Views/Signup/signUp";
import Login from './Views/Login/login';

const middleware = [thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducer,
  composeEnhancer(applyMiddleware(...middleware))
);

function App() {
  return (
    <div>
     <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DSA/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
     </Provider>
    </div>
  );
}

export default App;
