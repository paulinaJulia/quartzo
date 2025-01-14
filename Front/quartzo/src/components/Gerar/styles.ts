import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 100vh;
    padding: 20px;
    background-color: #f5f5f5;
    font-family: Arial, sans-serif;
`;

export const Header = styled.header`
    text-align: center;
    margin-bottom: 30px;

    h1 {
        font-size: 2.5rem;
        color: #014D4E;
    }

    p {
        font-size: 1.2rem;
        color: #555;
    }
`;

export const Section = styled.section`
    width: 100%;
    max-width: 800px;
    margin: 20px 0;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    h2 {
        font-size: 1.8rem;
        margin-bottom: 15px;
        color: #014D4E;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;

    label {
        font-size: 1rem;
        font-weight: bold;
        color: #014D4E;
    }

    input, select, textarea {
        width: 100%;
        padding: 10px;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);

        &:focus {
            outline: none;
            border-color: #014D4E;
        }
    }

    textarea {
        resize: none;
        height: 100px;
    }
`;

export const Button = styled.button`
    padding: 15px;
    font-size: 1rem;
    color: white;
    background-color: #014D4E;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #012F30;
    }

    &:active {
        background-color: #011E20;
    }

    &:disabled {
        background-color: #bbb;
        cursor: not-allowed;
    }
`;

export const Footer = styled.footer`
    text-align: center;
    margin-top: 30px;
    padding: 10px;
    background-color: #014D4E;
    color: white;
    width: 100%;

    p {
        font-size: 0.9rem;
    }
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;

    th, td {
        padding: 10px;
        text-align: left;
        border-bottom: 1px solid #ddd;

        &:first-child {
            font-weight: bold;
            color: #014D4E;
        }
    }

    th {
        background-color: #f1f1f1;
        color: #014D4E;
    }

    tr:hover {
        background-color: #f9f9f9;
    }
`;

export const ErrorMessage = styled.div`
    color: red;
    font-size: 1rem;
    margin-top: 10px;
    text-align: center;
`;

export const SuccessMessage = styled.div`
    color: green;
    font-size: 1rem;
    margin-top: 10px;
    text-align: center;
`;
