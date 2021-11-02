import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "../../redux/store/configureStore";
import HomePage from "./HomePage";

describe("Given a HomePage component", () => {
  describe("When the user types 'Take a shower' in the input and clicks to the submit button", () => {
    test("Then it should render a <li> element with the text 'Take a shower'", async () => {
      const userInput = "Take a shower";
      const tasksStore = configureStore();

      render(
        <Provider store={tasksStore}>
          <HomePage />
        </Provider>
      );

      const textInput = screen.getByLabelText(/task/i);
      const button = screen.getByRole("button", { name: /create/i });
      userEvent.type(textInput, userInput);
      userEvent.click(button);
      const newElement = await screen.findByRole("heading", {
        name: userInput,
      });

      expect(newElement).toBeInTheDocument();
    });
  });
});
