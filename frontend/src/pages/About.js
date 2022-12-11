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

  // const slidePics = [
  //   { url: photo1 },
  //   { url: "../utils/Photos/slidepics/20191120_112529000_iOS.jpg" },
  //   { url: "../utils/Photos/slidepics/20190617_013623640_iOS.jpg" },
  //   { url: "../utils/Photos/slidepics/20190617_013623640_iOS.jpg" },
  //   { url: "../utils/Photos/slidepics/20190617_013623640_iOS.jpg" },
  //   { url: "../utils/Photos/slidepics/20190617_013623640_iOS.jpg" },
  //   { url: "../utils/Photos/slidepics/20190617_013623640_iOS.jpg" },
  //   { url: "../utils/Photos/slidepics/20190617_013623640_iOS.jpg" },
  // ];

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
            className={style.slider}
            width={900}
            height={775}
            images={slidePics}
            showBullets={true}
            showNavs={true}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
