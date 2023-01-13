import React, { useEffect, useState, useReducer } from "react";
import Navbar from "../components/Navbar";
import CommentBox from "../components/CommentBox";
import EditModal from "../components/EditModal";
import axios from "axios";
import MainDisplay from "../components/MainDisplay";
import style from "../styles/Comments.module.css";

//TODO:
// 1: set state into initial state with useEffect on first load
// 2: create GET, POST, UPDATE in cases
//    Get - should update initial state on page load
//    POST - should post to database and update local state
//    UPDATE - should update database and update local state
//    DELETE - should delete from database and update local state

// BUGS
// the MainDisplay is not throwing errors I think this is due to the main display not receiving
// data in time and trying to use array methods on undefined.

const INITIAL_STATE = {
  comments: {},
  change: {},
};
const ACTIONS = {
  GET: "fetch_comments",
  UPDATE: "update_comment",
  DELETE: "delete_comment",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET": {
      return {
        comments: action.payload,
      };
    }
    case "POST": {
      return {
        comments: { ...state, ...action.payload },
      };
    }
    default:
      return state;
  }
};

export const CommentContext = React.createContext();

const Comments = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  //const [show, setShow] = useState(false);
  const [rerender, setRerender] = useState(false);
  const [display, setDisplay] = useState(false);
  const [modal, setModal] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8080/comments")
      .then((response) => {
        dispatch({ type: "GET", payload: response.data });
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

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
      .then(() => {
        dispatch({ type: "POST", payload: postData });
      })
      .then((data) => console.log("success", data))

      .catch((error) => {
        console.error("Error:", error);
      });

    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";

    // console.log(postData);
  };

  const handleDelete = (e) => {
    //dispatch({ type: ACTIONS.DELETE, payload: e.currentTarget.id });
    axios
      .delete(`http://localhost:8080/comments/${e.target.id}`)
      .then(() => console.log(`Deleted Comment ${e.target.id}`))
      .then(() => setRerender(!rerender))
      .catch((err) => {
        console.error(err.message);
      });
  };

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
      .then(dispatch({ type: "UPDATE", payload: newUpdate }))
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
  console.log(state);
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
          {/* need to understand why the MainDisplay is erroring out I thing it is because
the data is not getting through on first attempt so it is conducting array methods on 
undefined */}
          <div className={style.commentContainer}>{/* <MainDisplay /> */}</div>
        </div>
      </div>
    </CommentContext.Provider>
  );
};

export default Comments;
