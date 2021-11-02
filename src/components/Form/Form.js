import { useEffect, useState } from "react";
import useTasks from "../../hooks/useTasks";

const Form = () => {
  const { createTask } = useTasks();

  const initialData = {
    text: "",
    done: false,
  };

  const [doTask, setDoTask] = useState(initialData);
  const [isDisabled, setIsDisabled] = useState(true);

  const onChange = (event) => {
    setDoTask({
      ...doTask,
      text: event.target.value,
    });
  };

  useEffect(() => {
    setIsDisabled(doTask.text !== "" ? false : true);
  }, [doTask.text, setIsDisabled]);

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
          type="text"
          id="text"
          title="input"
          value={doTask.text}
          onChange={onChange}
        />
      </div>
      <div className="button-container">
        <button type="submit" disabled={isDisabled}>
          Create
        </button>
      </div>
    </form>
  );
};

export default Form;
