import LoginFormStyled from "./LoginFormStyled";

const LoginForm = () => {
  return (
    <LoginFormStyled autoComplete="off" noValidate>
      <label htmlFor="username">
        Username:
        <input id="username" type="text" />
      </label>
      <label htmlFor="password">
        Password:
        <input id="password" type="text" />
      </label>
      <button type="submit">LOG IN</button>
    </LoginFormStyled>
  );
};
export default LoginForm;
