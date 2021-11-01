import PropTypes from "prop-types";
import useTasks from "../../hooks/useTasks";
import "./Task.css";

const Task = ({ task }) => {
  const { tasks, deleteTask } = useTasks();

  const onDelete = (event) => {
    event.preventDefault();
    deleteTask(task.id);
  };

  const onCheck = () => {
    task = { ...task, done: !task.done };
    console.log(task);
  };

  return (
    <li title="list-item">
      <p className={task.done ? "done" : ""}>{task.text}</p>
      <label>
        <input type="checkbox" onClick={onCheck} />
      </label>
      <button>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Task;
