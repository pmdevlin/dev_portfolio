import React, { useContext } from "react";
import DisplayItem from "./DisplayItem";
import style from "../componentStyles/MainDisplay.module.css";
import { CommentContext } from "../pages/Comments";

const MainDisplay = () => {
  const commentContext = useContext(CommentContext);

  //console.log(commentContext);

  // const view = commentContext.commentState.forEach((item, index) => {
  //   return <DisplayItem key={index} item={item} />;
  // });

  //console.log(item);

  return (
    <div className={style.comment}>
      {commentContext.commentState.map((item, index) => {
        return <DisplayItem key={index} item={item} />;
      })}
    </div>
  );
};

export default MainDisplay;
