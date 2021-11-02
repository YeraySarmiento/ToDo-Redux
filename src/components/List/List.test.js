import { render, screen } from "@testing-library/react";
import List from "./List";
import configureStore from "../../redux/store/configureStore";
import { Provider } from "react-redux";

describe("Given a List component", () => {
  describe("When it receives an array with two tasks", () => {
    const tasksList = [
      {
        text: "Do shopping",
      },
      {
        text: "Take the dog to vet",
      },
    ];

    test("Then it should render two tasks", () => {
      const tasksStore = configureStore();

      render(
        <Provider store={tasksStore}>
          <List tasksList={tasksList} />
        </Provider>
      );
      const tasks = screen.getAllByRole("listitem", { name: "list-item" });

      expect(tasks).toHaveLength(tasksList.length);
    });

    test("Then it should render the texts 'Do shopping' and 'Take the dog to vet'", () => {
      const tasksStore = configureStore();

      render(
        <Provider store={tasksStore}>
          <List tasksList={tasksList} />
        </Provider>
      );
      const taskList = screen.getByRole("list", {
        name: "tasks-list",
      });

      expect(taskList).toHaveTextContent(
        tasksList[0].text && tasksList[1].text
      );
    });
  });
});
