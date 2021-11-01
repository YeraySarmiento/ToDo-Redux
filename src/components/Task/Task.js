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

export default Task;
