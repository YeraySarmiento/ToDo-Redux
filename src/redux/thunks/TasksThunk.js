import { createTaskAction, loadTasksAction } from "../actions/actionCreators";

const apiURL = "https://todo-ysarmiento.herokuapp.com/todo";

export const loadTasksThunk = () => {
  return async (dispatch) => {
    const response = await fetch(apiURL);
    const tasks = await response.json();
    dispatch(loadTasksAction(tasks));
  };
};

export const createTaskThunk = (task) => {
  return async (dispatch) => {
    const response = await fetch(apiURL, {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const addTask = await response.json();
    dispatch(createTaskAction(addTask));
  };
};
