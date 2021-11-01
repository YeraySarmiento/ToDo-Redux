import actionTypes from "../actions/actionTypes";

const tasksReducer = (tasks = [], action) => {
  let newTasks;

  switch (action.type) {
    case actionTypes.loadTasks:
      newTasks = [...action.tasks];
      break;

    case actionTypes.createTask:
      newTasks = [...tasks, action.task];
      break;

    case actionTypes.deleteTask:
      newTasks = tasks.filter((task) => task.id !== action.id);
      break;

    default:
      newTasks = tasks;
  }

  return newTasks;
};

export default tasksReducer;
