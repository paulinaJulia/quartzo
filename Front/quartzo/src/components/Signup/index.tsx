import React, { useState } from "react";
import { SignupContainer } from "./styles";
import { useNavigate } from "react-router-dom";

export const Signup: React.FC = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!username || !email || !password) {
            setError("Por favor, preencha todos os campos.");
            return;
        }

        try {
            const response = await fetch("http://127.0.0.1:8000/user_register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Usuário cadastrado com sucesso:", data);
                alert("Cadastro realizado com sucesso!");
                navigate("/"); // Redireciona para a tela de login
            } else {
                const errorData = await response.json();
                console.error("Erro ao cadastrar:", errorData);
                setError(errorData.message || "Erro ao realizar o cadastro. Tente novamente.");
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            setError("Erro ao conectar com o servidor.");
        }
    };

    return (
        <SignupContainer>
            <form className="form" onSubmit={handleSignup}>
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
                    placeholder="Nome de Usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                        style={{
                            cursor: "pointer",
                            color: "#0b0d17",
                            textDecoration: "underline",
                        }}
                    >
                        Faça login
                    </span>
                </p>
            </form>
        </SignupContainer>
    );
};
