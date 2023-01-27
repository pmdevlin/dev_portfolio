import style from "../componentStyles/DisplayItem.module.css";
import { FaWindowClose, FaEdit } from "react-icons/fa";
import { CommentContext } from "../pages/Comments";
import { useContext } from "react";

const DisplayItem = (props) => {
  const data = useContext(CommentContext);
  const { id, name, topic, body } = props.item;
  var elementPos = data.commentState
    .map((x) => {
      return x.id;
    })
    .indexOf(id);

  return (
    <div className={style.container}>
      <div className={style.nameAndButton}>
        <div className={style.nameContainer}>
          <label className={style.name}>Name:</label>
          <h3 className={style.input}>{name}</h3>
        </div>
        <div className={style.buttons}>
          <FaEdit className={style.edit} id={id} onClick={data.handleModal} />
          <FaWindowClose
            className={style.close}
            id={id}
            index={elementPos}
            onClick={data.handleDelete}
          />
        </div>
      </div>
      <div className={style.topicContainer}>
        <label className={style.topic}>Topic:</label>
        <h3 className={style.input}>{topic}</h3>
      </div>
      <div className={style.paragraphContainer}>
        <p className={style.input}>{body}</p>
      </div>
    </div>
  );
};

export default DisplayItem;
