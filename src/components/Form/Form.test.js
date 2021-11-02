import { render, screen } from "@testing-library/react";
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
      const formButton = screen.getByRole("button", { name: "Create" });

      expect(formInput).toBeInTheDocument();
      expect(formButton).toBeInTheDocument();
    });
  });
});
