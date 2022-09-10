import React from "react";
import Navbar from "../components/Navbar";
import CommentBox from "../components/CommentBox";
import Display from "../components/Display";
import style from "../styles/Comments.module.css";

const Comments = () => {
  return (
    <div className={style.container}>
      <Navbar />
      <div className={style.main}>
        <CommentBox />
        <Display />
      </div>
    </div>
  );
};

export default Comments;
