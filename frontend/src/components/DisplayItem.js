import React from "react";
import style from "../componentStyles/DisplayItem.module.css";
import { FaEdit, FaWindowClose } from "react-icons/fa";

const DisplayItem = (props) => {
  const { id, name, topic, body } = props.item;
  const handleClose = () => {
    fetch(`http://localhost:8080/comments/${id}`, {
      method: "DELETE",
    })
      .then(props.handleView)
      .then((data) => console.log(`successfully deleted comment ${id}`, data))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className={style.container}>
      <div className={style.nameAndButton}>
        <div className={style.nameContainer}>
          <label className={style.name}>Name:</label>
          <h3 className={style.input}>{name}</h3>
        </div>
        <div className={style.buttons}>
          <FaEdit className={style.edit} />
          <FaWindowClose className={style.close} onClick={handleClose} />
        </div>
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
