import React from "react";
import style from "../styles/About.module.css";
import Navbar from "../components/Navbar";
const About = () => {
  return (
    <>
      <Navbar />
      <div className={style.container}>
        <div className={style.L}>
          <h2 className={style.introTitle}>About Me</h2>
          <div className={style.intro}></div>
        </div>
        <div className={style.R}>
          <div className={style.image}></div>
          <h2 className={style.skillsTitle}>Some of my Skills</h2>
          <div className={style.skills}></div>
        </div>
      </div>
    </>
  );
};

export default About;
