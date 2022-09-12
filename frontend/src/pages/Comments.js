import React from "react";
import Navbar from "../components/Navbar";
import CommentBox from "../components/CommentBox";
// import Display from "../components/Display";
import style from "../styles/Comments.module.css";

const Comments = (props) => {
  // const display = props.forEach((item, key) => {
  //   <Display item={item} key={key} />;
  // });

  return (
    <div className={style.container}>
      <Navbar />
      <div className={style.main}>
        <CommentBox />
      </div>
    </div>
  );
};

export default Comments;
