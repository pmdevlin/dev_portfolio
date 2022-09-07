import React from "react";
//import Navbar from "./components/Navbar";
//import Home from "./pages/Home";
import About from "./pages/About";
import style from "./styles/App.module.css";

const App = () => {
  return (
    <div className={style.app}>
      {/* <Navbar /> */}
      <About />
      {/* <Home /> */}
    </div>
  );
};

export default App;
