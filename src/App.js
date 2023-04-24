import React from "react";
import {
    Routes,
    Route,
    useNavigate
  } from "react-router-dom";
import Reg from "./Reg";
import success from "./success";

const App = () => {
    const navigate = useNavigate();
  return (
   
      <Routes>
        <Route path="/" element={<Reg />}>
        <Route path="/success" element={<success/> } />
        </Route>
      </Routes>
  
  )
}

export default App
