// const handleDelete = (e) => {
//   //dispatch({ type: ACTIONS.DELETE, payload: e.currentTarget.id });
//   axios
//     .delete(`http://localhost:8080/comments/${e.target.id}`)
//     .then(() => console.log(`Deleted Comment ${e.target.id}`))
//     .then(() => setRerender(!rerender))
//     .catch((err) => {
//       console.error(err.message);
//     });
// };

// const handleUpdate = (e) => {
//   e.preventDefault();
//   const id = e.target.id;

//   const newUpdate = {
//     name: e.target[0].value || e.target[0].placeholder,
//     topic: e.target[1].value || e.target[1].placeholder,
//     body: e.target[2].value || e.target[2].placeholder,
//   };
//   axios
//     .put(`http://localhost:8080/comments/${id}`, newUpdate)
//     .then(() => console.log(`update of comment ${id} Successful`))
//     .then(dispatch({ type: "UPDATE", payload: newUpdate }))
//     .then(() => setDisplay(false))
//     .catch((err) => {
//       console.error(err.message);
//     });
// };

// const handleModal = (e) => {
//   const target = e.currentTarget.id;
//   const commentArr = state.comments;
//   const modalObj = {};
//   for (const elem of commentArr) {
//     // eslint-disable-next-line
//     if (elem.id == target) {
//       modalObj.id = elem.id;
//       modalObj.name = elem.name;
//       modalObj.topic = elem.topic;
//       modalObj.body = elem.body;
//     }
//   }
//   setModal((modal) => ({
//     ...modal,
//     ...modalObj,
//   }));

//   setDisplay(true);
// };
// const closeModal = () => {
//   setDisplay(false);
// };
