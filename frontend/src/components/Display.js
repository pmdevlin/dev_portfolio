import React from "react";
import style from "./Display.module.css";

const Display = () => {
  return (
    <div className={style.container}>
      <div className={style.nameContainer}>
        <label className={style.name}>Name:</label>
        <h3 className={style.input}> temp name</h3>
      </div>
      <div className={style.topicContainer}>
        <label className={style.topic}>Topic:</label>
        <h3 className={style.input}>code theory</h3>
      </div>
      <div className={style.paragraphContainer}>
        <p className={style.input}>this is a temp comment</p>
      </div>
    </div>
  );
};

export default Display;
