import Task from "../Task/Task";

const List = ({ tasksList }) => {
  return (
    <ul>
      {tasksList.map((task, id) => (
        <Task key={id} task={task} />
      ))}
    </ul>
  );
};

export default List;
