import React, { useContext } from "react";
import style from "../componentStyles/CommentBox.module.css";
import { CommentContext } from "../pages/Comments";

const CommentBox = () => {
  const data = useContext(CommentContext);
  //console.log(data);
  return (
    <div className={style.container}>
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
  );
};

export default CommentBox;
