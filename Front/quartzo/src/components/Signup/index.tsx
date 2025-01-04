import React, { useState } from "react";
import { SignupContainer } from "./styles";
import { useNavigate } from "react-router-dom";

export const Signup: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setError("Por favor, preencha todos os campos.");
            return;
        }

        // Simula o cadastro
        console.log("Usuário cadastrado com sucesso:", { name, email, password });
        setError("");
        alert("Cadastro realizado com sucesso!");
        navigate("/"); // Redireciona para a tela de login após o cadastro
    };

    return (
        <SignupContainer>
            <form className="form" onSubmit={handleSignup}>
                <h2>Cadastro</h2>
                <input
                    type="text"
                    className="input"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    className="input"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="button">
                    Cadastrar
                </button>
                {error && <p className="error">{error}</p>}
                <p className="login" onClick={() => navigate("/")}>
                    Já tem uma conta? Faça login
                </p>
            </form>
        </SignupContainer>
    );
};
