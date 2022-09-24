import React, { useEffect, useReducer } from "react";
import Navbar from "../components/Navbar";
import CommentBox from "../components/CommentBox";
import axios from "axios";
import MainDisplay from "../components/MainDisplay";
import style from "../styles/Comments.module.css";
//import { FaGit } from "react-icons/fa";

export const CommentContext = React.createContext();

const initialState = {
  loading: true,
  show: false,
  error: "",
  comments: {},
  id: "",
};
const ACTIONS = {
  GET: "fetch_comments",
  ERROR: "error_handler",
  COMMENTS: "access_comments",
  HIDE: "hide_comments",
  DELETE: "delete_comment",
};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET: {
      return {
        comments: action.payload,
        error: "was not able to complete request for comments",
      };
    }
    case ACTIONS.COMMENTS: {
      return {
        loading: false,
        comments: state,
      };
    }
    case ACTIONS.DELETE: {
      return {
        id: action.payload,
      };
    }
    case ACTIONS.ERROR: {
      return {
        loading: false,
      };
    }
    case ACTIONS.HIDE: {
      return {
        show: false,
      };
    }
    default:
      return state;
  }
};

const Comments = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [comment, setComment] = useState();
  // const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/comments")
      .then((response) => {
        dispatch({ type: ACTIONS.GET, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ACTIONS.ERROR });
      });
  }, []);

  const handleView = () => {
    dispatch({ type: ACTIONS.GET, show: true });
    console.log(state);
  };
  const handleHide = () => {
    dispatch({ type: ACTIONS.HIDE });
  };
  // const handleDelete = () => {
  //   axios
  //     .delete(`http://localhost:8080/comments/${id}`)
  //     .then((data) => console.log(`delete success for comment id: ${id}`));
  // };
  //console.log(state);
  return (
    <CommentContext.Provider
      value={{ commentState: state, dispatch: dispatch }}
    >
      <div className={style.container}>
        <Navbar />

        <div className={style.main}>
          <CommentBox />
          <div className={style.buttonContainer}>
            <button className={style.button} onClick={handleView} type="button">
              View
            </button>
            <button className={style.button} onClick={handleView} type="button">
              Refresh
            </button>
            <button className={style.button} onClick={handleHide} type="button">
              Hide
            </button>
          </div>
          <div className={style.commentContainer}>
            {state.show ? (
              <MainDisplay />
            ) : (
              <p className={style.instructions}>
                To See all comments press View
              </p>
            )}
          </div>
        </div>
      </div>
    </CommentContext.Provider>
  );
};

export default Comments;
