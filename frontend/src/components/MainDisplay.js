import React from "react";
import DisplayItem from "./DisplayItem";
import style from "./MainDisplay.module.css";

const MainDisplay = (props) => {
  console.log(props);

  const view = props.comment.map((item) => {
    return <DisplayItem item={item} key={item.id} />;
  });

  return <div className={style.comment}>{view}</div>;
};

export default MainDisplay;
