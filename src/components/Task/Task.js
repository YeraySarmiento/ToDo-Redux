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
      <p>{task.text}</p>
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
