import React from "react";
import style from "./DisplayItem.module.css";

const DisplayItem = (props) => {
  console.log(props);
  const { name, topic, body } = props.item;
  return (
    <div className={style.container}>
      <div className={style.nameContainer}>
        <label className={style.name}>Name:</label>
        <h3 className={style.input}> {name}</h3>
      </div>
      <div className={style.topicContainer}>
        <label className={style.topic}>Topic:</label>
        <h3 className={style.input}>{topic}</h3>
      </div>
      <div className={style.paragraphContainer}>
        <p className={style.input}>{body}</p>
      </div>
    </div>
  );
};

export default DisplayItem;
