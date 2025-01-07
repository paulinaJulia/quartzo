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

        console.log("Usuário cadastrado com sucesso:", { name, email, password });
        setError("");
        alert("Cadastro realizado com sucesso!");
        navigate("/"); 
    };

    return (
        <SignupContainer>
            <form className="form" onSubmit={handleSignup}>
                {/* Logo da empresa */}
                <div className="logo-container">
                    <img
                        src="logo_quartzo.png"
                        alt="Logo da Empresa"
                        className="logo"
                    />
                </div>
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
                <p className="login">
                    Já tem uma conta?{" "}
                    <span
                        onClick={() => navigate("/")}
                        style={{ cursor: "pointer", color: "#0b0d17", textDecoration: "underline" }}
                    >
                        Faça login
                    </span>
                </p>
            </form>
        </SignupContainer>
    );
};
