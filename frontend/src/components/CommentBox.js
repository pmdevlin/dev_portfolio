import React from "react";
import style from "./CommentBox.module.css";

const CommentBox = () => {
  return (
    <div className={style.container}>
      <div className={style.main}>
        <form className={style.form}>
          <label className={style.Title} for="name">
            Name
          </label>
          <input className={style.nameBox} type="text" id="name" name="name" />
          <label className={style.Title} for="topic">
            Topic
          </label>
          <input
            className={style.topicBox}
            type="text"
            id="topic"
            name="topic"
          />
          <label className={style.Title} for="body">
            Comment
          </label>
          <input className={style.bodyBox} type="text" id="body" name="body" />
          <input className={style.button} type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
};

export default CommentBox;
