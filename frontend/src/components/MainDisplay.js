import React, { useContext } from "react";
import DisplayItem from "./DisplayItem";
import style from "../componentStyles/MainDisplay.module.css";
//import { CommentContext } from "../pages/Comments";

const MainDisplay = (props) => {
  const view = props.comments.map((item, index) => {
    return (
      <DisplayItem key={index} item={item} handleDelete={props.handleDelete} />
    );
  });

  // const commentContext = useContext(CommentContext);

  // const view = commentContext.commentState
  //   .slice(0)
  //   .reverse()
  //   .map((item) => {
  //     console.log(item);
  //     return (
  //       <DisplayItem
  //         key={item.id}
  //         item={item}
  //         handleDelete={commentContext.handleDelete}
  //         //handleUpdate={commentContext.handleUpdate}
  //       />
  //     );
  //   });

  return <div className={style.comment}>{view}</div>;
};

export default MainDisplay;
