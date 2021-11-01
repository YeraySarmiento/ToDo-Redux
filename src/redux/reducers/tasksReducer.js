import actionTypes from "../actions/actionTypes";

const tasksReducer = (tasks = [], action) => {
  let newTasks;

  switch (action.type) {
    case actionTypes.loadTasks:
      newTasks = [...action.tasks];
      break;

    default:
      newTasks = tasks;
  }

  return newTasks;
};

export default tasksReducer;
