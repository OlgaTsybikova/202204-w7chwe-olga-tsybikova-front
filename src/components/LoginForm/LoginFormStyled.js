import styled from "styled-components";

const LoginFormStyled = styled.form`
  background-color: #efefef;
  form {
    font-family: "Roboto", sans-serif;
    font-size: 1.2rem;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 20px;
    transition: all 0.3s;
    transform: translateY(0rem);
    input {
      padding: 4rem;
      border-radius: 0.5rem;
      border: none;
    }

    label {
      display: flex;
      flex-direction: column;
    }
    textarea {
      padding: 1rem 1rem;
      border-radius: 0.5rem;
      border: none;
    }
  }
`;

export default LoginFormStyled;
