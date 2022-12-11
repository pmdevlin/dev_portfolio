import React from "react";
import style from "../componentStyles/Skill.module.css";

export const Skill = (props) => {
  console.log(props.item[0].logo);

  return (
    <div className={style.container}>
      <h3 className={style.logo}>{props.item[0].logo}</h3>

      <h3>name</h3>
      <h3>%</h3>
    </div>
  );
};

export default Skill;
