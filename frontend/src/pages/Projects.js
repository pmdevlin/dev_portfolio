import React, { useState } from "react";
import Navbar from "../components/Navbar";
import style from "../styles/Projects.module.css";
import ProjectDisplay from "../components/ProjectDisplay";
import projectObj from "../utils/projectObj";
import Description from "../components/Description";

const Projects = () => {
  const [visible, setVisible] = useState(false);
  const [num, setNum] = useState(null);

  const handleClick = (e) => {
    const clickId = e.target.id;
    setNum(clickId);
    setVisible(true);
  };

  const display = projectObj.map((item, key) => {
    return <ProjectDisplay handleClick={handleClick} item={item} key={key} />;
  });

  return (
    <div className={style.container}>
      <Navbar />
      {/* <div className={style.main}> */}
      <div className={style.display}>{display}</div>
      <div className={style.infoContainer}>
        {visible ? (
          <Description projectObj={projectObj[num]} setVisible={setVisible} />
        ) : (
          ""
        )}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Projects;
