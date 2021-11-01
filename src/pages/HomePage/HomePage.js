import { useEffect } from "react";
import Form from "../../components/Form/Form";
import List from "../../components/List/List";
import useTasks from "../../hooks/useTasks";

const HomePage = () => {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <>
      <h2>TO DO LIST</h2>
      <Form />
      <List tasksList={tasks} />
    </>
  );
};

export default HomePage;
