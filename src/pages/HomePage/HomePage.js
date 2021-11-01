import { useSelector } from "react-redux";
import Form from "../../components/Form/Form";
import List from "../../components/List/List";

const HomePage = () => {
  const tasks = useSelector((tasks) => tasks.tasksReducer);

  

  return (
    <>
      <h2>TO DO LIST</h2>
      <Form />
      <List tasksList={tasks} />
    </>
  );
};

export default HomePage;
