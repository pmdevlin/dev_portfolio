import React from "react";
import style from "../componentStyles/Skill.module.css";

export const Skill = (props) => {
  console.log(props.item);
  const percent = props.item.percent;
  const divStyle = {
    background: "var(--comment-grey)",
    width: percent + "%",
  };
  const dynamicMargin = {
    marginLeft: percent - 2 + "px",
  };

  // const color = () => {
  //   return <div style={divStyle}></div>;
  // };

  return (
    <div className={style.container} style={divStyle}>
      <h3 className={style.logo}>{props.item.logo}</h3>
      <h3 className={style.type}>{props.item.type}</h3>
      <div className={style.percent}>{props.item.percent}%</div>
    </div>
  );
};

export default Skill;
