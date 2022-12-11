import React from "react";
import style from "../styles/About.module.css";
import Navbar from "../components/Navbar";
import intro from "../utils/Into";
import SkillObj from "../utils/skills";
import Skill from "../components/Skill";

const About = () => {
  console.log(SkillObj);

  return (
    <div className={style.container}>
      <Navbar />
      <div className={style.main}>
        <div className={style.L}>
          <div className={style.intro}>{intro.intro}</div>

          <div className={style.skills}>
            <h2 className={style.skillsTitle}>Some of my Skills</h2>
            <Skill item={SkillObj} />
          </div>
        </div>
        <div className={style.R}></div>
      </div>
    </div>
  );
};

export default About;
