import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 100vh;
    padding: 20px;
    background-color: #f9f9f9;
    font-family: Arial, sans-serif;
`;

export const Header = styled.header`
    text-align: center;
    margin-bottom: 30px;

    h1 {
        font-size: 2.5rem;
        color: #0b0d17;
    }

    p {
        font-size: 1.2rem;
        color: #555;
    }
`;

export const Section = styled.section`
    width: 100%;
    max-width: 600px;
    margin: 20px 0;

    h2 {
        font-size: 1.8rem;
        margin-bottom: 15px;
        color: #0b0d17;
    }
`;

export const Button = styled.button`
    width: 100%;
    padding: 15px 20px;
    margin: 10px 0;
    font-size: 1rem;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }

    &:active {
        background-color: #00408b;
    }
`;

export const Footer = styled.footer`
    text-align: center;
    margin-top: 30px;
    padding: 10px;
    background-color: #0b0d17;
    color: white;
    width: 100%;

    p {
        font-size: 0.9rem;
    }
`;
