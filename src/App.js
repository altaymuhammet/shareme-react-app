import "./App.css";
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Login from "./Components/Login";
import Home from "./Container/Home";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}

export default App;
