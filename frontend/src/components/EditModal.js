import React, { useContext } from "react";
import { CommentContext } from "../pages/Comments";
import style from "../componentStyles/EditModal.module.css";
import { FaWindowClose } from "react-icons/fa";

const EditModal = () => {
  const data = useContext(CommentContext);

  // console.log(funcData.modal);

  return (
    <div
      className={style.EditModal}
      style={{ display: data.display ? "block" : "none" }}
    >
      <div className={style.container}>
        <FaWindowClose onClick={data.closeModal} />
        <form
          className={style.form}
          id={data.modal.id}
          onSubmit={data.handleUpdate}
        >
          <label className={style.title}>Name</label>
          <input
            className={style.nameBox}
            type="text"
            placeholder={data.modal.name}
          />

          <label className={style.title}>Topic</label>
          <input
            className={style.topicBox}
            type="text"
            placeholder={data.modal.topic}
          />

          <label className={style.title}>Comment</label>
          <textarea
            className={style.bodyBox}
            type="text"
            placeholder={data.modal.body}
          ></textarea>

          <input className={style.button} type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
};

export default EditModal;
