import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "../../redux/store/store";
import LoginPage from "./LoginPage";

describe("Given a component LoginPage", () => {
  describe("When invoked", () => {
    test("Then it should render a h1 element with the text 'Social Cookies'", () => {
      const text = "Social Cookies";

      render(
        <BrowserRouter>
          <Routes>
            <Route
              path="*"
              element={
                <Provider store={store}>
                  <LoginPage />
                </Provider>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      );

      const expectedText = screen.getByText(text);
      expect(expectedText).toBeInTheDocument();
    });
  });
});
