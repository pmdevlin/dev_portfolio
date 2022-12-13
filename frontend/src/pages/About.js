import React from "react";
import Slider from "react-simple-image-slider";
import style from "../styles/About.module.css";
import Navbar from "../components/Navbar";
import intro from "../utils/Into";
import SkillObj from "../utils/skills";
import Skill from "../components/Skill";
import slidePics from "../utils/slidePhotos";

const About = () => {
  const skillGen = SkillObj.map((item, key) => {
    return <Skill item={item} key={key} />;
  });

  return (
    <div className={style.container}>
      <Navbar />
      <div className={style.main}>
        <div className={style.L}>
          <div className={style.intro}>{intro.intro}</div>
          <h2 className={style.skillsTitle}>Skills</h2>
          <div className={style.skills}>{skillGen}</div>
        </div>
        <div className={style.R}>
          <Slider
            width={900}
            height={720}
            images={slidePics}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            autoPlayDelay={10.0}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
