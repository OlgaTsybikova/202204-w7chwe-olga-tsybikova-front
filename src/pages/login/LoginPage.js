import LoginForm from "../../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

function LoginPage() {
  return (
    <LoginPageStyled>
      <h1> Social Cookies</h1>
      <LoginForm />
    </LoginPageStyled>
  );
}
export default LoginPage;
