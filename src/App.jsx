import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DSA from "./Views/DSA";
function App() {
  return (
    <div>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<DSA/>}>
        
      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
