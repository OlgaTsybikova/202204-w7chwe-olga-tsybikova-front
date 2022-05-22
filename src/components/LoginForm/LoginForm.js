import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import loginThunk from "../../redux/thunks/userThunk";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = () => {
  const emptyFields = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(emptyFields);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (formData.username !== "" && formData.password !== "") {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formData]);

  const resetData = () => {
    setFormData(emptyFields);
  };

  const changeData = (event) =>
    setFormData({ ...formData, [event.target.id]: event.target.value });

  const submitLogin = (event) => {
    event.preventDefault();
    dispatch(loginThunk(formData));
    resetData();
    <Link to="/" />;
  };

  return (
    <LoginFormStyled autoComplete="off" noValidate onSubmit={submitLogin}>
      <label htmlFor="username">
        Username:
        <input
          id="username"
          type="text"
          value={formData.username}
          onChange={changeData}
          placeholder="Username"
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          id="password"
          type="password"
          value={formData.password}
          onChange={changeData}
          placeholder="Password"
        />
      </label>
      <button type="submit" disabled={buttonDisabled}>
        LOG IN
      </button>
    </LoginFormStyled>
  );
};
export default LoginForm;
