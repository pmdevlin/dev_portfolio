import React from "react";
import style from "../styles/Home.module.css";
import logo from "../images/Logo2.svg";
import { Link } from "react-router-dom";

export default function Home() {
  // const handleClick = () => {
  //   console.log(e.target);
  // };

  return (
    <div className={style.container}>
      <img className={style.logo} src={logo} alt="logo" />

      <div className={style.intro}>
        <h1>
          Hello, I am<span className={style.name}>Paul Devlin</span>
        </h1>
        <h1 className={style.text}>I'm a full-stack web developer.</h1>
      </div>

      <Link to="/projects">
        <button type="submit" className={style.button}>
          Projects
        </button>
      </Link>
    </div>
  );
}
