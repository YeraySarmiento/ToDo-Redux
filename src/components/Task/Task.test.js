import { render, screen } from "@testing-library/react";
import Task from "./Task";

describe("Given a Task Component", () => {
  describe("When it receives an object with a text: 'Do shopping'", () => {
    test("Then it should render a <li> tag with the text 'Do shopping' on it", () => {
      const task = {
        text: "Do shopping",
        done: false,
      };

      render(<Task task={task} />);
      const taskItem = screen.getByRole("listitem", { name: "list-item" });

      expect(taskItem).toHaveTextContent(task.text);
    });
  });
});
