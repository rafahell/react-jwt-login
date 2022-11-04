import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";

describe("With React Testing Library", () => {
  //mock redux

  const mockStore = configureStore();
  const auth = { _id: null };
  let store;

  test("test sign in button", async () => {
    store = mockStore({ auth });
    render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );

    //user expect the button to be disable
    expect(
      await screen.findByRole("button", { name: /sign in/i })
    ).toBeDisabled();

    //filling up the text fields username and passw
    userEvent.type(screen.getByRole("textbox", { name: /username/i }), "john");
    userEvent.type(screen.getByLabelText(/password/i), "dinner");

    //button become enable
    expect(
      await screen.findByRole("button", { name: /sign in/i })
    ).toBeEnabled();
  });
});
