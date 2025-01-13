import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";
import { MenuPage } from "./components/MenuPage";
import { Menu } from "@mui/material";
import { CadastroImovel } from "./components/Cadastro";
import { Imoveis } from "./components/Imoveis";
import { EditarImovel } from "./components/Editar";
// import { RenovarContratos } from "./components/RenovarContratos"; // Criar este componente
// import { GerarRelatorios } from "./components/GerarRelatorios"; // Criar este componente

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/main" element={<MenuPage />} />      
                <Route path="/cadastrar-imovel" element={<CadastroImovel />} />
                <Route path="/editar-imoveis/:id" element={<EditarImovel />} />

                <Route path="/imoveis" element={<Imoveis />} />

                {/*<Route path="/renovar-contratos" element={<RenovarContratos />} />
                <Route path="/gerar-relatorios" element={<GerarRelatorios />} /> */ } */
            </Routes>
        </Router>
    );
}

export default App;
