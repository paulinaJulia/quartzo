import React from "react"
import { Container, Form, Logo } from "./styles";
import { Button, FilledInput, InputAdornment } from "@mui/material";
import { HiOutlineUser } from "react-icons/hi"
import { SlLock } from "react-icons/sl"


export const Signin = () =>{
    return(
        <Container>

           <div className="container">
            <div className="container1">CONTAINER 1</div>
                <div className="imagem">
                    <img src="logo612.png" 
                    width={400}
                    height={400}
                    className="imagem"
                    alt="banner" />
                </div>
            <div className="container2">
                <Form>
                    <Logo>
                    </Logo>
                    <p>Login</p>
                        <FilledInput
                            id="filled-adornment-weight"
                            className="input"
                            placeholder="Login"
                            endAdornment={
                                <InputAdornment position="end">
                                    <HiOutlineUser 
                                    style={{
                                        color: "#0563e7ba",
                                        fontSize: "1.5rem",
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
                                        color: "#0563e7ba",
                                        fontSize: "1.5rem",
                                    }}
                                    />
                                </InputAdornment>
                            }
                        />
                        <div className="buttom-checkbox">
                            <Button variant="contained" className="buttom">
                                Login
                            </Button>
                                <div>
                                    <span>
                                        <input type="checkbox" className="input-checkbox" />
                                    </span>
                                    <p>Lembrar senha.</p>
                                </div>
                        </div>
                </Form>
            </div>
           </div>
        </Container>
    );
};