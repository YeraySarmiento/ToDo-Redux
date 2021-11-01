import PropTypes from "prop-types";

const Task = ({ task }) => {
  return (
    <li title="list-item">
      <p>{task.text}</p>
      <label>
        <input type="checkbox" />
      </label>
      <button>Edit</button>
      <button>Delete</button>
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Task;
