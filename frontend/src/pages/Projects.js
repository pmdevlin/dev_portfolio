import React from "react";
import Navbar from "../components/Navbar";
import style from "../styles/Projects.module.css";
import ProjectDisplay from "../components/ProjectDisplay";
import projectObj from "../utils/projectObj";

const Projects = () => {
  console.log(projectObj);

  const display = projectObj.map((item, key) => {
    return <ProjectDisplay item={item} key={key} />;
  });

  return (
    <div className={style.container}>
      <Navbar />
      <div className={style.main}>{display}</div>
    </div>
  );
};

export default Projects;
