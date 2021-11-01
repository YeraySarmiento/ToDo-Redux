import Form from "../../components/Form/Form";
import List from "../../components/List/List";

const HomePage = () => {
  const list = [
    {
      text: "hola",
      done: false,
    },
    {
      text: "hello",
      done: false,
    },
  ];

  

  return (
    <>
      <h2>TO DO LIST</h2>
      <Form />
      <List tasksList={list} />
    </>
  );
};

export default HomePage;
