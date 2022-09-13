import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CommentBox from "../components/CommentBox";
import MainDisplay from "../components/MainDisplay";
import style from "../styles/Comments.module.css";

const Comments = () => {
  const [comment, setComment] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/comments")
      .then((res) => res.json())
      .then((data) => setComment(data));
  }, []);

  const handleView = () => {
    setShow(true);
  };
  const handleHide = () => {
    setShow(false);
  };

  // const handleRefresh = () =>{
  // }

  return (
    <div className={style.container}>
      <Navbar />
      <div className={style.main}>
        <CommentBox />
        <div className={style.buttonContainer}>
          <button className={style.button} onClick={handleView} type="button">
            View
          </button>
          <button className={style.button} type="button">
            Refresh
          </button>
          <button className={style.button} onClick={handleHide} type="button">
            Hide
          </button>
        </div>
        <div className={style.commentContainer}>
          {show ? <MainDisplay comment={comment} /> : <p>view Comments here</p>}
        </div>
      </div>
    </div>
  );
};

export default Comments;
