import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Header, Section, Button, Footer } from "./styles";

export const MenuPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Header>
                <h1>Quartzo - Gestão Imobiliária</h1>
                <p>Seu sistema completo para gerenciar imóveis e contratos com eficiência.</p>
            </Header>

            <Section>
                <h2>Gestão de Imóveis</h2>
                <Button onClick={() => navigate("/cadastrar-imovel")}>Cadastrar Imóvel</Button>
                <Button onClick={() => navigate("/imoveis")}>Imóveis</Button>
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
        </Container>
    );
};
