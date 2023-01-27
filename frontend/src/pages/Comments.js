import React, { useEffect, useState, useReducer, Suspense } from "react";
import Navbar from "../components/Navbar";
import CommentBox from "../components/CommentBox";
import Loading from "../components/Loading";
import MainDisplay from "../components/MainDisplay";
import style from "../styles/Comments.module.css";
import EditModal from "../components/EditModal";

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
      return {
        comments: state.comments.filter((item) => item.id != action.payload),
      };
    }
    case "UPDATE": {
      const { newUpdate } = action.payload;
      return {
        comments: [
          ...(state.comment = state.comments.map((item) =>
            item.id != newUpdate.id ? item : newUpdate
          )),
        ],
      };
    }
    default:
      return state;
  }
};

export const CommentContext = React.createContext();

const Comments = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [display, setDisplay] = useState(false);
  const [modal, setModal] = useState({});

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:8080/comments");
      //console.log(response);
      const data = await response.json();
      dispatch({ type: "GET", payload: data });
    }
    getData();
  }, []);
  // console.log(state);

  const handlePost = (e) => {
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
      .then(() => console.log("successfully added comment"))

      .catch((error) => {
        console.error("Error:", error);
      });

    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";

    // console.log(postData);
  };

  const handleUpdate = (e) => {
    // e.preventDefault();
    const id = e.target.id;
    const newUpdate = {
      id: id,
      name: e.target[0].value || e.target[0].placeholder,
      topic: e.target[1].value || e.target[1].placeholder,
      body: e.target[2].value || e.target[2].placeholder,
    };
    //console.log(newUpdate);
    //console.log(id);
    dispatch({ type: "UPDATE", payload: { newUpdate: newUpdate } });
    closeModal();
    // axios
    //   .put(`http://localhost:8080/comments/${id}`, newUpdate)
    //   .then(() => console.log(`update of comment ${id} Successful`))
    //   .then()
    //   .catch((err) => {
    //     console.error(err.message);
    //   });
  };

  const handleModal = (e) => {
    const target = e.currentTarget.id;
    //console.log(target);
    const commentArr = state.comments;
    //console.log(commentArr);
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

    //console.log(modalObj);
    setModal((modal) => ({
      ...modal,
      ...modalObj,
    }));

    setDisplay(true);
  };
  const closeModal = () => {
    setDisplay(false);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    let id = e.target.id;
    dispatch({ type: "DELETE", payload: id });

    // e.preventDefault();
    // fetch(`http://localhost:8080/comments/${id}`, {
    //   method: "DELETE",
    //   headers: {
    //     "Access-Control-Allow-Origin": "http://localhost:8080/comments",
    //   },
    // })
    //   .then(() => console.log(`Deleted Comment ${id}`))
    //   .catch((err) => {
    //     console.error(err.message);
    //   });
  };

  //console.log(state);
  return (
    <CommentContext.Provider
      value={{
        commentState: state.comments,
        dispatch: dispatch,
        handleDelete: handleDelete,
        handleUpdate: handleUpdate,
        handlePost: handlePost,
        handleModal: handleModal,
        closeModal: closeModal,
        display: display,
        modal: modal,
      }}
    >
      <div className={style.container}>
        <Navbar />
      </div>

      <div className={style.main}>
        {display ? <EditModal /> : ""}
        <CommentBox />
        <Suspense fallback={<Loading />}>
          <MainDisplay />
        </Suspense>
      </div>
    </CommentContext.Provider>
  );
};

export default Comments;
