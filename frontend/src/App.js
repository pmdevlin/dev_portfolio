import React, { useState } from "react";
//import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import style from "./styles/App.module.css";

const App = () => {
  const [comments, setComments] = useState("");

  return (
    <div className={style.app}>
      {/* <Navbar /> */}
      <Home />
    </div>
  );
};

export default App;
