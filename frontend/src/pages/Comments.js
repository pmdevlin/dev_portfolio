import React, { useEffect, useState, useReducer } from "react";
import Navbar from "../components/Navbar";
import CommentBox from "../components/CommentBox";
//import EditModal from "../components/EditModal";

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
  comments: [],
  checker: [],
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
        comments: [...state.comments, action.payload],
      };
    }
    case "DELETE": {
      return state.comments.map((item) => {
        if (item.id !== action.payload) {
          return { comments: [...item] };
        } else {
          return state;
        }
      });
    }
    default:
      return state;
  }
};

export const CommentContext = React.createContext();

const Comments = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  //const [test, setTest] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:8080/comments");
      console.log(response);
      const data = await response.json();
      dispatch({ type: "GET", payload: data });
    }
    getData();
  }, []);

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
    e.preventDefault();
    fetch(`http://localhost:8080/comments/${e.target.id}`, {
      method: "DELETE",
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:8080/comments",
      },
    })
      .then(() => console.log(`Deleted Comment ${e.target.id}`))
      .catch((err) => {
        console.error(err.message);
      });

    dispatch({ type: "DELETE", payload: e.currentTarget.id });
  };

  //console.log(state);
  return (
    <CommentContext.Provider
      value={{
        commentState: state.comments,

        handleSubmit: handleSubmit,
        handleDelete: handleDelete,
      }}
    >
      <div className={style.container}>
        <Navbar />
      </div>
      <div className={style.main}>
        <CommentBox />
        <MainDisplay comments={state.comments} handleDelete={handleDelete} />
      </div>
    </CommentContext.Provider>
  );
};

export default Comments;
