import React from "react";
import DisplayItem from "./DisplayItem";
import style from "../componentStyles/MainDisplay.module.css";

const MainDisplay = (props) => {
  const view = props.comment
    .slice(0)
    .reverse()
    .map((item) => {
      return (
        <DisplayItem item={item} key={item.id} handleView={props.handleView} />
      );
    });

  return <div className={style.comment}>{view}</div>;
};

export default MainDisplay;
