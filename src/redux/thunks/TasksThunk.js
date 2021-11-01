import { loadTasksAction } from "../actions/actionCreators";

const apiURL = process.env.REACT_APP_API_URL;

console.log(apiURL);

export const loadTasksThunk = () => {
  return async (dispatch) => {
    const response = await fetch(apiURL);
    const tasks = await response.json();
    dispatch(loadTasksAction(tasks));
  };
};
