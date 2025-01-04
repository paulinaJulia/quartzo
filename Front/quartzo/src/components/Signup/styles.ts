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

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;

  .form {
    width: 100%;
    max-width: 400px;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    .input {
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
    }

    .button {
      width: 100%;
      padding: 10px;
      background-color: #014d4e;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
      transition: background-color 0.3s;

      &:hover {
        background-color: #012c2c;
      }
    }

    .error {
      color: red;
      margin-top: 10px;
      text-align: center;
    }
  }
`;