import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import allReducer from './reducers';
import DSA from './Views/DSAIDE';
import SignUp from './Views/Signup/';
import Login from './Views/Login';
import Problem from './Views/ProblemIDE';
import UserCode from './Views/SavedCode';
import SnippetScreen from './Components/snippet';
import { ToastContainer } from "react-toastify";
import EditorSettingsScreen from './Components/editorSettings';
import ReactGA from 'react-ga';
ReactGA.initialize('G-VQGDT6VH51');

const middleware = [thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducer,
  composeEnhancer(applyMiddleware(...middleware))
);

function App() {
  return (
    <div>
      <ToastContainer
        autoClose={5000}
        theme="dark"
        position="bottom-right"
        closeOnClickrtl={true}
      />
     <Provider store={store}>
      <AnimatePresence exitBeforeEnter>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DSA/>}/>
          <Route path="/:shareId" element={<DSA/>}/>
          <Route path="/editorSettings" element={<EditorSettingsScreen/>}/>
          <Route path="/ps" element={<Problem/>}/>
          <Route path="/snippet" element={<SnippetScreen/>}/>
          <Route path="/usercode/:id" element={<DSA/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/usercode" element={<UserCode/>}/>
        </Routes>
      </BrowserRouter>
      </AnimatePresence>
     </Provider>
    </div>
  );
}

export default App;
