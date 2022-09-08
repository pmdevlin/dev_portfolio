import React from "react";
//import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Comments from "./pages/Comments";
import style from "./styles/App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className={style.app}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="comments" element={<Comments />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
