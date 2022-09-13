import React from "react";
import style from "../componentStyles/CommentBox.module.css";

const CommentBox = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <div className={style.container}>
      <div className={style.main}>
        <form className={style.form} onSubmit={handleSubmit}>
          <label className={style.title} htmlFor="name">
            Name
          </label>
          <input className={style.nameBox} type="text" name="name" />
          <label className={style.title} htmlFor="topic">
            Topic
          </label>

          <input className={style.topicBox} type="text" name="topics" />

          <label className={style.title} htmlFor="body">
            Comment
          </label>
          <textarea
            className={style.bodyBox}
            type="text"
            name="body"
          ></textarea>
          <input className={style.button} type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
};

export default CommentBox;
