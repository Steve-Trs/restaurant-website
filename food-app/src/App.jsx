import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Breakfast from "./components/Breakfast";
import AllDay from "./components/AllDay";
import Contact from "./components/Contact";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu/breakfast" element={<Breakfast />} />
          <Route path="/menu/allday" element={<AllDay />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
