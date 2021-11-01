import { useState } from "react";

const Form = () => {
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
    setDoTask(initialData);

    console.log(doTask);
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
        <input type="text" id="text" value={doTask.text} onChange={onChange} />
      </div>
      <div className="button-container">
        <button type="submit">Create</button>
      </div>
    </form>
  );
};

export default Form;
