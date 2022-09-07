import React from "react";
import style from "./Navbar.module.css";
import links from "../utils/links";
import NavLogo from "../images/NavbarLogo.svg";
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
      <div className={style.mediaContainer}>
        <FaGithubSquare className={style.github} size={60} />
        <FaLinkedin className={style.linkedin} size={60} />
      </div>
      <div className={style.logoContainer}>
        <img className={style.logo} src={NavLogo} alt="NavLogo" />
      </div>
      <div className={style.linkContainer}>
        <ul className={style.linkUl}>{link}</ul>
      </div>
    </div>
  );
};

export default Navbar;
