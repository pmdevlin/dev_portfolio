import React, { useEffect, useState, useReducer } from "react";
import Navbar from "../components/Navbar";
import CommentBox from "../components/CommentBox";
import axios from "axios";
import MainDisplay from "../components/MainDisplay";
import style from "../styles/Comments.module.css";
//import { FaGit } from "react-icons/fa";

export const CommentContext = React.createContext();

const initialState = {
  update: "",
  delete: 0,
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
    case ACTIONS.DELETE: {
      return {
        delete: action.payload,
        ...state,
      };
    }

    default:
      return state;
  }
};

const Comments = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/comments")
      .then((response) => {
        dispatch({ type: ACTIONS.GET, payload: response.data });
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  const handleViews = (e) => {
    if (e.target.id === "view") {
      setShow(true);
    }
    if (e.target.id === "hide") {
      setShow(false);
    }
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8080/comments/${state.delete}`)
      .then(() => console.log(`Deleted Comment ${state.delete}`));
  };

  console.log(state);
  return (
    <CommentContext.Provider
      value={{
        commentState: state.comments,
        dispatch: dispatch,
        handleDelete: handleDelete,
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
