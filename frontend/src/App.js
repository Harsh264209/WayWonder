import React from "react";
import HomePage from "./Components/homePage/HomePage";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Destination from "./pages/Destination/Destination";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Destination" element={<Destination />} />
      </Routes>
    </div>
  );
}

export default App;
