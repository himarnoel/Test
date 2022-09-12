import React from "react";
import Logo from "./logo512.png";
import "./App.css";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Ready from "./Pages/Ready";
import Result from "./Pages/Result";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ready" element={<Ready />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
