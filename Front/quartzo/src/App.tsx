import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";
import { MainPage } from "./components/Menu"; // Importa a página principal
// import { CadastrarImovel } from "./components/CadastrarImovel"; // Criar este componente
// import { EditarImoveis } from "./components/EditarImoveis"; // Criar este componente
// import { RemoverImoveis } from "./components/RemoverImoveis"; // Criar este componente
// import { RenovarContratos } from "./components/RenovarContratos"; // Criar este componente
// import { GerarRelatorios } from "./components/GerarRelatorios"; // Criar este componente

function App() {
    return (
        <Router>
            <Routes>
                {/* Rotas para login e cadastro */}
                <Route path="/" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />

                {/* Rota para a página principal */}
                <Route path="/main" element={<MainPage />} />

                {/* Rotas para funcionalidades específicas
                <Route path="/cadastrar-imovel" element={<CadastrarImovel />} />
                <Route path="/editar-imoveis" element={<EditarImoveis />} />
                <Route path="/remover-imoveis" element={<RemoverImoveis />} />
                <Route path="/renovar-contratos" element={<RenovarContratos />} />
                <Route path="/gerar-relatorios" element={<GerarRelatorios />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
