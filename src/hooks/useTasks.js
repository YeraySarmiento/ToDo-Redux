import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTaskAction } from "../redux/actions/actionCreators";
import { createTaskThunk, loadTasksThunk } from "../redux/thunks/TasksThunk";

const useTasks = () => {
  const tasks = useSelector((tasks) => tasks.tasksReducer);
  const dispatch = useDispatch();

  const loadTasks = useCallback(() => {
    dispatch(loadTasksThunk());
  }, [dispatch]);

  const createTask = (task) => {
    dispatch(createTaskThunk(task));
  };

  return {
    tasks,
    loadTasks,
    createTask,
  };
};

export default useTasks;
