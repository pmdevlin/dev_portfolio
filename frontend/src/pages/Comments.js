import React, { useEffect, useState, useReducer } from "react";
import Navbar from "../components/Navbar";
import CommentBox from "../components/CommentBox";
import axios from "axios";
import MainDisplay from "../components/MainDisplay";
import style from "../styles/Comments.module.css";

export const CommentContext = React.createContext();

const initialState = {
  comments: "",
};
export const ACTIONS = {
  GET: "fetch_comments",
  DELETE: "delete_comment",
};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET: {
      return {
        comments: action.payload,
      };
    }
    default:
      return state;
  }
};

const Comments = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [show, setShow] = useState(false);
  const [rerender, setRerender] = useState(false);

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

  const handleViews = (e) => {
    if (e.target.id === "view") {
      setShow(true);
      setRerender(!rerender);
    }
    if (e.target.id === "hide") {
      setShow(false);
      setRerender(!rerender);
    }
  };
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

  const handleDelete = (e) => {
    axios
      .delete(`http://localhost:8080/comments/${e.target.id}`)
      .then(() => console.log(`Deleted Comment ${e.target.id}`))
      .then(() => setRerender(!rerender))
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <CommentContext.Provider
      value={{
        commentState: state.comments,
        dispatch: dispatch,
        handleDelete: handleDelete,
        handleSubmit: handleSubmit,
      }}
    >
      <div className={style.container}>
        <Navbar />

        <div className={style.main}>
          <CommentBox />
          <div className={style.buttonContainer}>
            <button
              className={style.button}
              id="view"
              onClick={handleViews}
              type="button"
            >
              View
            </button>
            <button className={style.button} type="button">
              Refresh
            </button>
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
