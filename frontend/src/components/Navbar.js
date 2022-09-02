import React from "react";
import style from "./Navbar.module.css";
import links from "../utils/links";
import logo from "../images/Logo2.svg";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Navbar = () => {
  const link = links.map((item, key) => {
    return (
      <li key={key} className={style.linkLi}>
        {item}
      </li>
    );
  });
  return (
    <div className={style.container}>
      <div className={style.logoContainer}>
        <img className={style.logo} src={logo} alt="Logo" />
        <FaGithubSquare className={style.github} size={40} color="white" />
        <FaLinkedin className={style.linkedin} size={40} color="#0077B5" />
      </div>

      <div className={style.linkContainer}>
        <ul className={style.linkUl}>{link}</ul>
      </div>
    </div>
  );
};

export default Navbar;
