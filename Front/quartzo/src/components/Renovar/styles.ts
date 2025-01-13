import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    min-height: 100vh;
`;

export const Header = styled.header`
    text-align: center;
    margin-bottom: 30px;

    h1 {
        font-size: 2rem;
        color: #2c3e50;
        margin-bottom: 10px;
    }

    p {
        font-size: 1rem;
        color: #7f8c8d;
    }
`;

export const Table = styled.table`
    width: 100%;
    max-width: 800px;
    border-collapse: collapse;
    margin-bottom: 20px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    th, td {
        text-align: left;
        padding: 12px;
        border: 1px solid #ddd;
    }

    th {
        background-color: #34495e;
        color: #ffffff;
    }

    tr:nth-child(even) {
        background-color: #f9f9f9;
    }

    tr:hover {
        background-color: #f1f1f1;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    label {
        font-size: 1rem;
        color: #2c3e50;
    }

    input {
        padding: 10px;
        font-size: 1rem;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
`;

export const Button = styled.button`
    padding: 10px 15px;
    font-size: 1rem;
    color: #ffffff;
    background-color: #2980b9;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #1c598a;
    }

    &:disabled {
        background-color: #bdc3c7;
        cursor: not-allowed;
    }
`;

export const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;

    h2 {
        margin-bottom: 20px;
        color: #2c3e50;
    }

    button {
        margin-top: 15px;
    }
`;

export const Footer = styled.footer`
    text-align: center;
    margin-top: 40px;

    p {
        font-size: 0.9rem;
        color: #7f8c8d;
    }
`;
