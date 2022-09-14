import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CommentBox from "../components/CommentBox";
import MainDisplay from "../components/MainDisplay";
import style from "../styles/Comments.module.css";

const Comments = () => {
  const [comment, setComment] = useState();
  const [show, setShow] = useState(false);

  const handleView = () => {
    fetch("http://localhost:8080/comments")
      .then((res) => res.json())
      .then((data) => setComment(data))
      .then(() => setShow(true));
  };
  const handleHide = () => {
    setShow(false);
  };

  return (
    <div className={style.container}>
      <Navbar />
      <div className={style.main}>
        <CommentBox />
        <div className={style.buttonContainer}>
          <button className={style.button} onClick={handleView} type="button">
            View
          </button>
          <button className={style.button} onClick={handleView} type="button">
            Refresh
          </button>
          <button className={style.button} onClick={handleHide} type="button">
            Hide
          </button>
        </div>
        <div className={style.commentContainer}>
          {show ? (
            <MainDisplay comment={comment} handleView={handleView} />
          ) : (
            <p className={style.instructions}>To See all comments press View</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comments;
