import React from "react";
import { useNavigate } from "react-router-dom";

export const MainPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Bem-vindo ao Sistema de Gestão de Imóveis</h1>
            <button onClick={() => navigate("/cadastrar-imovel")}>Cadastrar Imóvel</button>
            <button onClick={() => navigate("/editar-imoveis")}>Editar Imóveis</button>
            <button onClick={() => navigate("/remover-imoveis")}>Remover Imóveis</button>
            <button onClick={() => navigate("/renovar-contratos")}>Renovar Contratos</button>
            <button onClick={() => navigate("/gerar-relatorios")}>Gerar Relatórios</button>
        </div>
    );
};
