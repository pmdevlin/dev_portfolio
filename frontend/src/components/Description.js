import React from "react";
import style from "../componentStyles/Description.module.css";
import { FaWindowClose } from "react-icons/fa";

const Description = (props) => {
  const descriptionClose = () => {
    props.setVisible(false);
  };

  return (
    <div className={style.container}>
      <div className={style.titleBox}>
        <h2>{props.projectObj.name}</h2>
        <FaWindowClose onClick={descriptionClose} />
      </div>
      <p className={style.info}>{props.projectObj.info}</p>
    </div>
  );
};

export default Description;
