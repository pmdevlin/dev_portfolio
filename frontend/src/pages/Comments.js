import React from "react";
import Navbar from "../components/Navbar";
import CommentBox from "../components/CommentBox";
import style from "../styles/Comments.module.css";

const Comments = () => {
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
