import { render, screen } from "@testing-library/react";
import Task from "./Task";
import configureStore from "../../redux/store/configureStore";
import { Provider } from "react-redux";

describe("Given a Task Component", () => {
  describe("When it receives an object with a text: 'Do shopping'", () => {
    test("Then it should render a <li> tag with the text 'Do shopping' on it", () => {
      const task = {
        text: "Do shopping",
        done: false,
      };
      const tasksStore = configureStore();

      render(
        <Provider store={tasksStore}>
          <Task task={task} />
        </Provider>
      );

      const taskItem = screen.getByRole("listitem", { name: "list-item" });

      expect(taskItem).toHaveTextContent(task.text);
    });
  });
});
