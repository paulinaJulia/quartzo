import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: #C9DFF2;
    min-height: 100vh;
`;

export const Header = styled.div`
    text-align: center;
    margin-bottom: 20px;

    h1 {
        margin: 0;
        color: #333;
    }

    p {
        color: #555;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
`;

export const TextArea = styled.textarea`
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    resize: none;
`;

export const Select = styled.select`
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    background-color: #fff;
`;

export const Button = styled.button`
    padding: 10px 15px;
    border: none;
    background-color: #014D4E;
    color: #fff;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
        background-color: #0B0D17;
    }

    &:not(:last-child) {
        margin-bottom: 10px;
    }
`;
