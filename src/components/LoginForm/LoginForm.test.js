import LoginForm from "./LoginForm";
import "@testing-library/jest-dom";
import reactTestRenderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../../redux/store/store";

describe("Given a LoginForm component", () => {
  describe("When it is calledOn", () => {
    test("Should identify if the spy function was called or not", () => {
      const spyFunction = jest.fn();
      spyFunction();
      expect(spyFunction).toHaveBeenCalled();
    });
  });
  test("Then it should render correctly when there are no items", () => {
    const tree = reactTestRenderer
      .create(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
