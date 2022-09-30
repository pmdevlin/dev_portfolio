import React, { useContext } from "react";
import { CommentContext } from "../pages/Comments";
import style from "../componentStyles/EditModal.module.css";
import { FaWindowClose } from "react-icons/fa";

const EditModal = () => {
  const funcData = useContext(CommentContext);

  return (
    <div
      className={style.EditModal}
      style={{ display: funcData.display ? "block" : "none" }}
    >
      <div className={style.container}>
        <FaWindowClose onClick={funcData.closeModal} />
        <form className={style.form}>
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

export default EditModal;
