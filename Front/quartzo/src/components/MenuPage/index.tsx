import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Header, Section, Button, Footer } from "./styles";

const ThemeSwitcher: React.FC<{ toggleTheme: () => void }> = ({ toggleTheme }) => (
    <button onClick={toggleTheme}>Alternar Tema</button>
);

export const MenuPage: React.FC = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false); 
    const navigate = useNavigate();

    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);
    };

    const containerStyle = isDarkTheme
        ? { backgroundColor: "#333", color: "#fff" }
        : { backgroundColor: "#fff", color: "#000" }; 

    return (
        <Container style={containerStyle}>
            <Header>
                <h1>Quartzo - Gestão Imobiliária</h1>
                <p>Seu sistema completo para gerenciar imóveis e contratos com eficiência.</p>
            </Header>

            <Section>
                <h2>Gestão de Imóveis</h2>
                <Button onClick={() => navigate("/cadastrar-imovel")}>Cadastrar Imóvel</Button>
                <Button onClick={() => navigate("/editar-imoveis")}>Editar Imóveis</Button>
                <Button onClick={() => navigate("/remover-imoveis")}>Remover Imóveis</Button>
            </Section>

            <Section>
                <h2>Contratos e Relatórios</h2>
                <Button onClick={() => navigate("/renovar-contratos")}>Renovar Contratos</Button>
                <Button onClick={() => navigate("/gerar-relatorios")}>Gerar Relatórios</Button>
            </Section>

            <Footer>
                <p>
                    © {new Date().getFullYear()} Quartzo. Todos os direitos reservados.
                </p>
            </Footer>

            <ThemeSwitcher toggleTheme={toggleTheme} />
        </Container>
    );
};
