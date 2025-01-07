import styled, { keyframes } from "styled-components";


const moveToRight = keyframes`
  0% {
    opacity: 0;
    transform: translate(-200px);
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: translate(0px);
    opacity: 1;
  }
`;

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #0b0d17;

  .logo-container {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }

    .logo {
        max-width: 150px;
        height: auto;
    }

    .form {
        /* Resto do estilo do formulário */
    }

  .form {
    width: 100%;
    max-width: 400px;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    .input {
      width: 95%;
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
    }

    .button {
      width: 100%;
      padding: 10px;
      background-color: #A8D5BA;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
      transition: background-color 0.3s;

      &:hover {
        background-color: #0b0d17;
      }
    }

    .error {
      color: red;
      margin-top: 10px;
      text-align: center;
    }
  }
`;