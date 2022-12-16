export const INITIAL_STATE = {
  show: false,
  rerender: false,
  display: false,
  modal: {},
  comments: "",
  id: 0,
};

export const commentReducer = (state, action) => {
  switch (action.type) {
    case "VIEW":
      return {
        ...state,
        show: true,
        rerender: true,
      };
    case "HIDE":
      return {
        ...state,
        show: false,
        rerender: false,
      };
    case ACTIONS.GET: {
      return {
        comments: action.payload,
      };
    }
    case ACTIONS.DELETE: {
      return {
        id: action.payload,
        comments: [
          state.comments.filter((item, key) => {
            if (state.id !== item.id) {
              return item;
            }
          }),
        ],
        // ...state,
        // state.map((item) => {
        //   if (item.id !== state.id) {
        //     console.log(state.id);
        //     // axios
        //     //   .delete(`http://localhost:8080/comments/${id}}`)
        //     //   .then(() => console.log(`delete of ${id} completed`));
        //     return item;
        //   } else {
        //     console.log("not working");
        //   }
        // }),
      };
    }
    default:
      return state;
  }
};

export const ACTIONS = {
  GET: "fetch_comments",
  UPDATE: "update_comment",
  DELETE: "delete_comment",
};
