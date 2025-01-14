import React, { useState } from "react";
import { Container, Form, Logo } from "./styles";
import FilledInput from "@mui/material/FilledInput";
import { Button, InputAdornment } from "@mui/material";
import { HiOutlineUser } from "react-icons/hi";
import { SlLock } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const BASE_URL = process.env.REACT_APP_API_URL || "https://teste-paulina.novadata.dev/";

    const handleLogin = async () => {
        try {
            const response = await fetch(`${BASE_URL}user_login/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Login bem-sucedido:", data);

                if (data.access) {
                    localStorage.setItem("token", data.access);
                }
                navigate("/main");
            } else {
                const errorData = await response.json();
                console.error("Erro ao fazer login:", errorData);
                alert(errorData.message || "Usuário ou senha inválidos.");
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            alert("Erro ao conectar com o servidor.");
        }
    };

    return (
        <Container>
            <div className="container">
                <div className="container1">
                    <div className="image">
                        <img
                            src="controle-financeiro-imobiliaria.jpg"
                            width={900}
                            height={700}
                            className="img-banner"
                            alt="banner"
                        />
                    </div>
                </div>
                <div className="container2">
                    <Form>
                        <Logo>
                            <p>Login</p>
                        </Logo>
                        <FilledInput
                            id="username"
                            className="input"
                            placeholder="Usuário"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <HiOutlineUser
                                        style={{
                                            color: "#0B0D17",
                                            fontSize: "1.3rem",
                                        }}
                                    />
                                </InputAdornment>
                            }
                        />
                        <FilledInput
                            id="password"
                            className="input"
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <SlLock
                                        style={{
                                            color: "#0B0D17",
                                            fontSize: "1.3rem",
                                        }}
                                    />
                                </InputAdornment>
                            }
                        />
                        <div className="buttom">
                            <Button
                                variant="contained"
                                className="buttom"
                                onClick={handleLogin}
                            >
                                Entrar
                            </Button>
                        </div>
                        <div className="cad">
                            <p>
                                Criar conta:{" "}
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        navigate("/signup");
                                    }}
                                >
                                    Cadastrar-se.
                                </a>
                            </p>
                        </div>
                    </Form>
                </div>
            </div>
        </Container>
    );
};
