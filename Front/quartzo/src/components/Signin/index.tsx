import React from "react"
import { Container, Form, Logo } from "./styles";
import FilledInput from "@mui/material/FilledInput";
import { Button, InputAdornment } from "@mui/material";
import { HiOutlineUser } from "react-icons/hi"
import { SlLock } from "react-icons/sl"

export const Signin = () =>{
    return(
        <Container>
           <div className="container">
            <div className="container1">
                <div className="image">
                    <img 
                    src="controle-financeiro-imobiliaria.jpg" 
                    width={1155}
                    height={1000}
                    className="img-banner"
                    alt="banner" 
                    />
                    </div>
                </div>
            <div className="container2">
                <Form>
                    <Logo>
                    </Logo>
                    <p>Login</p>
                        <FilledInput
                            id="filled-adornment-weight"
                            className="input"
                            placeholder="Usuário"
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
                            id="filled-adornment-weight"
                            className="input"
                            type="password"
                            placeholder="Senha"
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
                            <Button variant="contained" className="buttom">
                            Entrar
                            </Button>
                                <div className="checkbox">
                                    <span>
                                    <input type="checkbox" className="input-checkbox" />
                                    </span>
                                    <p>Lembrar senha.</p>
                                </div>
                        </div>
                        <div className="cad">
                            <p>
                                Criar conta:  <a href="/">Cadastrar-se.</a>
                            </p>
                        </div>
                </Form>
            </div>
           </div>
        </Container>
    );
};