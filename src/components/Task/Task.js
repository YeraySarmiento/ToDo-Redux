import PropTypes from "prop-types";
import useTasks from "../../hooks/useTasks";

const Task = ({ task }) => {
  const { deleteTask } = useTasks();

  const onDelete = (event) => {
    event.preventDefault();
    console.log(task.id);
    deleteTask(task.id);
  };

  return (
    <li title="list-item">
      <h3>{task.text}</h3>
      <label>
        <input type="checkbox" />
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
