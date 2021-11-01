import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../../redux/store/configureStore";
import Task from "./Task";

describe("Given a Task Component", () => {
  describe("When it receives an object with a text: 'Do shopping'", () => {
    test("Then it should render a <li> tag with the text 'Do shopping' on it", () => {
      const tasksStore = configureStore();
      const task = {
        text: "Do shopping",
        done: false,
      };

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
