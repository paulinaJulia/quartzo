import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";
import { MenuPage } from "./components/MenuPage";
import { Menu } from "@mui/material";
import { CadastroImovel } from "./components/Cadastro";
import { EditarImoveis } from "./components/Editar"; // Criar este componente
// import { RemoverImoveis } from "./components/RemoverImoveis"; // Criar este componente
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
                <Route path="/editar-imoveis" element={<EditarImoveis />} />
                {/* <Route path="/remover-imoveis" element={<RemoverImoveis />} />
                <Route path="/renovar-contratos" element={<RenovarContratos />} />
                <Route path="/gerar-relatorios" element={<GerarRelatorios />} /> */ } */
            </Routes>
        </Router>
    );
}

export default App;
