import React from "react";
import style from "../componentStyles/Description.module.css";
import { FaWindowClose } from "react-icons/fa";

const Description = (props) => {
  const { name, tech, info, link, graphics } = props.projectObj;

  //console.log(graphics);
  const descriptionClose = () => {
    props.setVisible(false);
  };

  const graphicDisplay = () => {
    graphics.map((item) => {
      return <img src={item}></img>;
    });
  };

  return (
    <div className={style.master}>
      <div className={style.container}>
        <div className={style.titleBox}>
          <h2>{name}</h2>
          <FaWindowClose onClick={descriptionClose} />
        </div>
        <span className={style.tech}>{tech}</span>
        <span className={style.info}>{info}</span>
        <a href={link} className={style.link} rel="noreferrer" target="_blank">
          Code Theory Repo
        </a>
        <div className={style.photos}>
          <img className={style.thumbnails} src={graphics[0]} alt=""></img>
          <img className={style.thumbnails} src={graphics[1]} alt=""></img>
          <img className={style.thumbnails} src={graphics[2]} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Description;
