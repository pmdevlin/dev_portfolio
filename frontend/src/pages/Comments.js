import React, { useEffect, useState, useReducer } from "react";
import Navbar from "../components/Navbar";
import CommentBox from "../components/CommentBox";
import axios from "axios";
import MainDisplay from "../components/MainDisplay";
import style from "../styles/Comments.module.css";
//import { FaGit } from "react-icons/fa";

export const CommentContext = React.createContext();

const initialState = {
  show: false,
  comments: "",
};
const ACTIONS = {
  GET: "fetch_comments",
  SHOW: "show_comments",
};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET: {
      return {
        comments: action.payload,
      };
    }
    case ACTIONS.SHOW: {
    }
    // case ACTIONS.HIDE: {
    //   return {
    //     show: false,
    //   };
    // }

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

  const handleView = (e) => {
    console.log(e.target.id);
    if (e.target.id === "view") {
      setShow(true);
    }
    if (e.target.id === "hide") {
      setShow(false);
    }
  };

  return (
    <CommentContext.Provider
      value={{ commentState: state.comments, dispatch: dispatch }}
    >
      <div className={style.container}>
        <Navbar />

        <div className={style.main}>
          <CommentBox />
          <div className={style.buttonContainer}>
            <button
              className={style.button}
              id="view"
              onClick={handleView}
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
              onClick={handleView}
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
