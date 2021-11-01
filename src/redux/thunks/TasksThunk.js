import { loadTasksAction } from "../actions/actionCreators";

const apiURL = "https://todo-ysarmiento.herokuapp.com/todo";

export const loadTasksThunk = () => {
  return async (dispatch) => {
    const response = await fetch(apiURL);
    const tasks = await response.json();
    dispatch(loadTasksAction(tasks));
  };
};
