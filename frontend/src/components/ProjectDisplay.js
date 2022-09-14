import React from "react";
import style from "../componentStyles/ProjectDisplay.module.css";

const ProjectDisplay = (props) => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>{props.item.name}</h2>
      <button
        className={style.button}
        id={props.item.id}
        onClick={props.handleClick}
      >
        Description
      </button>
    </div>
  );
};

export default ProjectDisplay;
