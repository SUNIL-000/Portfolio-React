import React from "react";
import "./App.css";
// import Frontnav from './component/Frontnav'
import Home from "./routes/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Project from "./routes/Project";
import About from "./routes/About";
import Connect from "./routes/Connect";
import Frontnav from "./component/Frontnav";
import Skill from "./routes/Skill";
// import Frontnav from './component/Frontnav';
const App = () => {
  return (
    <Router>
      <Frontnav />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
};

export default App;
