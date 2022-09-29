import React, { useContext } from "react";
import style from "../componentStyles/CommentBox.module.css";
import { CommentContext } from "../pages/Comments";

const CommentBox = () => {
  const data = useContext(CommentContext);

  return (
    <div className={style.container}>
      <div className={style.main}>
        <form className={style.form} onSubmit={data.handleSubmit}>
          <label className={style.title}>Name</label>
          <input className={style.nameBox} type="text" />

          <label className={style.title}>Topic</label>
          <input className={style.topicBox} type="text" />

          <label className={style.title}>Comment</label>
          <textarea className={style.bodyBox} type="text"></textarea>

          <input className={style.button} type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
};

export default CommentBox;
