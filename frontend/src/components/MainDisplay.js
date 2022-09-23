import React, { useContext } from "react";
import DisplayItem from "./DisplayItem";
import style from "../componentStyles/MainDisplay.module.css";
import { CommentContext } from "../pages/Comments";

const MainDisplay = () => {
  const commentContext = useContext(CommentContext);
  console.log(commentContext.commentState);
  // const view = props.comment
  //   .slice(0)
  //   .reverse()
  //   .map((item) => {
  //     return (
  //       <DisplayItem item={item} key={item.id} handleView={props.handleView} />
  //     );
  //   });

  return <div className={style.comment}>{}</div>;
};

export default MainDisplay;
