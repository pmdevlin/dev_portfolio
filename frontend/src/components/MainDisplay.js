import React, { useContext } from "react";
import DisplayItem from "./DisplayItem";
import style from "../componentStyles/MainDisplay.module.css";
import { CommentContext } from "../pages/Comments";

const MainDisplay = () => {
  const commentContext = useContext(CommentContext);
  //console.log(commentContext.commentState);
  const view = commentContext.commentState
    .slice(0)
    .reverse()
    .map((item) => {
      return <DisplayItem item={item.id} key={item.id} />;
    });

  return <div className={style.comment}>{view}</div>;
};

export default MainDisplay;
