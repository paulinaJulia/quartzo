import React, { useState } from "react";
// import { Container, Form } from "./styles";

export const Signup = () =>{
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const handleSignup = async (e: React.FormEvent) => {
      e.preventDefault();
  
      // Validação simples (pode ser expandida conforme necessário)
      if (!username || !email || !password) {
        setError("Todos os campos são obrigatórios.");
        return;
      }
  
      try {
        // Simulação de requisição para o backend
        console.log("Cadastro realizado:", { username, email, password });
        setError("");
        alert("Cadastro realizado com sucesso!");
      } catch (err) {
        console.error(err);
        setError("Erro ao realizar o cadastro. Tente novamente.");
      }
    };
  
    return (
      <SignupContainer>
        <form className="form" onSubmit={handleSignup}>
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
        </form>
      </SignupContainer>
    );
  };
