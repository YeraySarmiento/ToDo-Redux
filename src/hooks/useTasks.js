import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTasksThunk } from "../redux/thunks/TasksThunk";

const useTasks = () => {
  const tasks = useSelector((tasks) => tasks.tasksReducer);
  const dispatch = useDispatch();

  const loadTasks = useCallback(() => {
    dispatch(loadTasksThunk());
  }, [dispatch]);

  return {
    tasks,
    loadTasks,
  };
};

export default useTasks;
