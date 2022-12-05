import React from "react";
import style from "../componentStyles/Description.module.css";
import { FaWindowClose } from "react-icons/fa";
// import photo from "../utils/Photos"

const Description = (props) => {
  const { name, tech, info, link } = props.projectObj;

  const descriptionClose = () => {
    props.setVisible(false);
  };

  return (
    <div className={style.master}>
      <div className={style.photos}>
        <img
          className={style.thumbnails}
          src="frontend\src\utils\Photos\codeTheoryHome.png"
          alt=""
        ></img>
      </div>
      <div className={style.container}>
        <div className={style.titleBox}>
          <h2>{name}</h2>
          <FaWindowClose onClick={descriptionClose} />
        </div>
        <p className={style.tech}>{tech}</p>
        <p className={style.info}>{info}</p>
        <a href={link} className={style.link} rel="noreferrer" target="_blank">
          Code Theory Repo
        </a>
      </div>
    </div>
  );
};

export default Description;
