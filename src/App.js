import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import FicheLogements from "./pages/FicheLogements";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/kasa" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<FicheLogements />} />
        <Route path="/*" element={<Error404 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
