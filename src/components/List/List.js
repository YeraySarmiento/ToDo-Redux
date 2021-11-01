import Task from "../Task/Task";
import { PropTypes } from "react";

const List = ({ tasksList }) => {
  return (
    <ul title="tasks-list">
      {tasksList.map((task, id) => (
        <Task key={id} task={task} />
      ))}
    </ul>
  );
};

List.propTypes = {
  tasksList: PropTypes.array.isRequired,
};

export default List;
