import styled from "styled-components";

// Container principal
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: #f5f5f5;
    min-height: 100vh;
`;

// Cabeçalho
export const Header = styled.header`
    text-align: center;
    margin-bottom: 30px;

    h1 {
        font-size: 2.5rem;
        color: #333;
    }

    p {
        font-size: 1.2rem;
        color: #666;
    }
`;

// Formulário
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 600px;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// Input genérico
export const Input = styled.input`
    padding: 10px 15px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;

    &:focus {
        border-color: #007bff;
        outline: none;
    }
`;

// Área de texto
export const TextArea = styled.textarea`
    padding: 10px 15px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none;

    &:focus {
        border-color: #007bff;
        outline: none;
    }
`;

// Seletor de categorias
export const Select = styled.select`
    padding: 10px 15px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;

    &:focus {
        border-color: #007bff;
        outline: none;
    }
`;

// Botões
export const Button = styled.button`
    padding: 12px 20px;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }

    &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }
`;
