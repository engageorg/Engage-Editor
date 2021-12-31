import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import allReducer from './reducers';
import DSA from './Views/DSA';
import SignUp from './Views/Signup/';
import Login from './Views/Login';
import Problem from './Views/DSA/problem';
import UserCode from './Views/SavedCode';
import SnippetScreen from './Views/DSA/snippet';

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
      <AnimatePresence exitBeforeEnter>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DSA/>}/>
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
