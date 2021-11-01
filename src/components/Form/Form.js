import { useState } from "react";
import useTasks from "../../hooks/useTasks";

const Form = () => {
  const { createTask } = useTasks();

  const initialData = {
    text: "",
    done: false,
  };

  const [doTask, setDoTask] = useState(initialData);

  const onChange = (event) => {
    setDoTask({
      ...doTask,
      text: event.target.value,
    });
  };

  const onCreate = (event) => {
    event.preventDefault();
    createTask(doTask);
    setDoTask(initialData);
  };

  return (
    <form
      className="form-create"
      autoComplete="off"
      onSubmit={onCreate}
      noValidate
    >
      <div className="form-group">
        <label htmlFor="name">Task:</label>
        <input
          title="Input"
          type="text"
          id="text"
          value={doTask.text}
          onChange={onChange}
        />
      </div>
      <div className="button-container">
        <button type="submit">Create</button>
      </div>
    </form>
  );
};

export default Form;
