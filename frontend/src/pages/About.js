import React from "react";
import style from "../styles/About.module.css";
import Navbar from "../components/Navbar";
import photo from "../images/profilepicthumbnail.png";
const About = () => {
  return (
    <div className={style.container}>
      <Navbar />
      <div className={style.main}>
        <div className={style.L}>
          <h2 className={style.introTitle}>About Me</h2>
          <div className={style.intro}></div>
        </div>
        <div className={style.R}>
          <div className={style.image}>
            <img className={style.profilePic} src={photo} alt="profilePic" />
          </div>
          <h2 className={style.skillsTitle}>Some of my Skills</h2>
          <div className={style.skills}></div>
        </div>
      </div>
    </div>
  );
};

export default About;
