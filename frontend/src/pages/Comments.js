import React, { useEffect, useState, useReducer } from "react";
import Navbar from "../components/Navbar";
import CommentBox from "../components/CommentBox";
import EditModal from "../components/EditModal";
import axios from "axios";
import MainDisplay from "../components/MainDisplay";
import style from "../styles/Comments.module.css";
import {
  INITIAL_STATE,
  commentReducer,
  ACTIONS,
} from "./reducers/CommentReducer";

export const CommentContext = React.createContext();

const Comments = () => {
  const [state, dispatch] = useReducer(commentReducer, INITIAL_STATE);
  const [show, setShow] = useState(false);
  const [rerender, setRerender] = useState(false);
  const [display, setDisplay] = useState(false);
  const [modal, setModal] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8080/comments")
      .then((response) => {
        dispatch({ type: ACTIONS.GET, payload: response.data });
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [rerender]);

  // RENDERING VIEW AND HIDE BUTTONS --> COMPLETED
  // LOGIC TO HANDLE BOTH IN ONE FUNCTION --> COMPLETED
  // TRIGGER A RENDER WHEN CLICKED ON EITHER BUTTON --> COMPLETED
  const handleViews = (e) => {
    console.log(e.target.id);
    if (e.target.id === "view") {
      //dispatch({ type: "VIEW" });
      setShow(true);
      setRerender(!rerender);
    }
    if (e.target.id === "hide") {
      //dispatch({ type: "HIDE" });
      setShow(false);
      setRerender(!rerender);
    }
  };

  // POST REQUEST FUNCTION --> COMPLETED
  // CREATE REQUEST OBJECT --> COMPLETED
  // FETCH POST REQUEST --> COMPLETED
  // INSTANT RERENDER --> COMPLETED
  // CLEAR FIELDS ON SUBMIT --> COMPLETED
  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      name: e.target[0].value,
      topic: e.target[1].value,
      body: e.target[2].value,
    };
    fetch("http://localhost:8080/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((data) => console.log("success", data))
      .then(() => setRerender(!rerender))
      .catch((error) => {
        console.error("Error:", error);
      });

    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";

    // console.log(postData);
  };

  // DELETE REQUEST --> COMPLETED
  // CONNECT ID TO THE DELETE FUNCTION --> COMPLETED
  // RERENDER OF PAGE AFTER DELETE --> COMPLETED
  const handleDelete = (e) => {
    dispatch({ type: ACTIONS.DELETE, payload: e.currentTarget.id });
    // axios
    //   .delete(`http://localhost:8080/comments/${e.target.id}`)
    //   .then(() => console.log(`Deleted Comment ${e.target.id}`))
    //   .then(() => setRerender(!rerender))
    //   .catch((err) => {
    //     console.error(err.message);
    //   });
  };

  // PUT REQUEST
  // CONNECT TO MODAL --> COMPLETE
  // SEND THE REQUEST --> COMPLETE
  // STYLING OF MODAL --> INCOMPLETE
  const handleUpdate = (e) => {
    e.preventDefault();
    const id = e.target.id;

    const newUpdate = {
      name: e.target[0].value || e.target[0].placeholder,
      topic: e.target[1].value || e.target[1].placeholder,
      body: e.target[2].value || e.target[2].placeholder,
    };
    axios
      .put(`http://localhost:8080/comments/${id}`, newUpdate)
      .then(() => console.log(`update of comment ${id} Successful`))
      .then(() => setRerender(!rerender))
      .then(() => setDisplay(false))
      .catch((err) => {
        console.error(err.message);
      });
  };

  const handleModal = (e) => {
    const target = e.currentTarget.id;
    const commentArr = state.comments;
    const modalObj = {};
    for (const elem of commentArr) {
      // eslint-disable-next-line
      if (elem.id == target) {
        modalObj.id = elem.id;
        modalObj.name = elem.name;
        modalObj.topic = elem.topic;
        modalObj.body = elem.body;
      }
    }
    setModal((modal) => ({
      ...modal,
      ...modalObj,
    }));

    setDisplay(true);
  };
  const closeModal = () => {
    setDisplay(false);
  };

  return (
    <CommentContext.Provider
      value={{
        commentState: state.comments,
        dispatch: dispatch,
        handleDelete: handleDelete,
        handleSubmit: handleSubmit,
        handleUpdate: handleUpdate,
        handleModal: handleModal,
        closeModal: closeModal,
        display: display,
        modal: modal,
      }}
    >
      <div className={style.container}>
        <Navbar />

        <div className={style.main}>
          <CommentBox />
          <EditModal />

          <div className={style.buttonContainer}>
            <button
              className={style.button}
              id="view"
              onClick={handleViews}
              type="button"
            >
              View
            </button>
            {/* <button className={style.button} type="button">
              Refresh
            </button> */}
            <button
              className={style.button}
              id="hide"
              onClick={handleViews}
              type="button"
            >
              Hide
            </button>
          </div>
          <div className={style.commentContainer}>
            {show ? (
              <MainDisplay />
            ) : (
              <p className={style.instructions}>"Press View to see Comments"</p>
            )}
          </div>
        </div>
      </div>
    </CommentContext.Provider>
  );
};

export default Comments;
