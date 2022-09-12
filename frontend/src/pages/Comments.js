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
        <div className={style.commentContainer}>
          <button className={style.button} type="button">
            View
          </button>
          <button className={style.button} type="button">
            Refresh
          </button>
          <button className={style.button} type="button">
            Hide
          </button>
        </div>
        <Display />
      </div>
    </div>
  );
};

export default Comments;
