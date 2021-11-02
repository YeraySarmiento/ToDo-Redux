import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "../../redux/store/configureStore";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When it is rendered", () => {
    test("Then it should render an input and a button with text 'Create'", () => {
      const tasksStore = configureStore();

      render(
        <Provider store={tasksStore}>
          <Form />
        </Provider>
      );

      const formInput = screen.getByRole("textbox", { name: /input/i });
      const formButton = screen.getByRole("button", { name: /create/i });

      expect(formInput).toBeInTheDocument();
      expect(formButton).toBeInTheDocument();
    });
  });

  describe("When the user types in the input", () => {
    test("Then it should render a non disabled submit button", () => {
      const tasksStore = configureStore();

      render(
        <Provider store={tasksStore}>
          <Form />
        </Provider>
      );

      const textInput = screen.getByRole("textbox", { name: /input/i });
      const button = screen.getByRole("button", { name: /create/i });

      userEvent.type(textInput, "Take the dog to vet");
      expect(button).not.toBeDisabled();
    });
  });
});
