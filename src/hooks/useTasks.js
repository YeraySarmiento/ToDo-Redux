import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createTaskThunk,
  deleteTaskThunk,
  loadTasksThunk,
} from "../redux/thunks/TasksThunk";

const useTasks = () => {
  const tasks = useSelector((tasks) => tasks.tasksReducer);
  const dispatch = useDispatch();

  const loadTasks = useCallback(() => {
    dispatch(loadTasksThunk());
  }, [dispatch]);

  const createTask = (task) => {
    dispatch(createTaskThunk(task));
  };

  const deleteTask = (id) => {
    dispatch(deleteTaskThunk(id));
  };

  return {
    tasks,
    loadTasks,
    createTask,
    deleteTask,
  };
};

export default useTasks;
