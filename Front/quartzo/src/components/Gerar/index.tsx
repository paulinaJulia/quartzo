import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Header, Table, Button, Footer } from "./styles";

export const GerarRelatorios: React.FC = () => {
    const [relatorios, setRelatorios] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const BASE_URL = process.env.REACT_APP_API_URL || ;
    useEffect(() => {
        const fetchRelatorios = async () => {
            try {
                const response = await fetch(`${BASE_URL}api/pagamento/`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                });

                if (response.status === 403) {
                    setError("Apenas usuários administradores podem acessar os relatórios.");
                    return;
                }

                if (!response.ok) {
                    throw new Error(`Erro ao carregar relatórios: ${response.statusText}`);
                }

                const data = await response.json();
                setRelatorios(data.results || []);
            } catch (error: any) {
                console.error("Erro ao carregar relatórios:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRelatorios();
    }, []);

    const fetchPdf = async () => {
        try {
            const response = await fetch(`${BASE_URL}api/pagamento/relatorio-pdf/`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error("Erro ao buscar o PDF");
            }

            const blob = await response.blob();
            const url = URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            link.download = "relatorio-financeiro.pdf";
            link.click();
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Erro ao baixar o PDF:", error);
            setError("Erro ao baixar o PDF");
        }
    };

    if (error) {
        return (
            <Container>
                <Header>
                    <h1>Relatórios Financeiros</h1>
                </Header>
                <p style={{ color: "red" }}>Erro ao carregar relatórios: {error}</p>
                <Button onClick={() => navigate("/main")}>Voltar ao Menu</Button>
            </Container>
        );
    }

    if (loading) {
        return (
            <Container>
                <Header>
                    <h1>Relatórios Financeiros</h1>
                </Header>
                <p>Carregando...</p>
                <Button onClick={() => navigate("/main")}>Voltar ao Menu</Button>
            </Container>
        );
    }

    return (
        <Container>
            <Header>
                <h1>Relatórios Financeiros</h1>
            </Header>
            <Table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    {relatorios.map((relatorio) => (
                        <tr key={relatorio.id}>
                            <td>{relatorio.data_pagamento}</td>
                            <td>{relatorio.contrato}</td>
                            <td>{`R$ ${relatorio.valor_pago.toFixed(2)}`}</td>
                            <td>{relatorio.cliente}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Button onClick={fetchPdf} style={{ marginTop: "20px" }}>
                Exportar para PDF
            </Button>
            <Button onClick={() => navigate("/main")} style={{ marginTop: "20px" }}>
                Voltar ao Menu
            </Button>
            <Footer>
                <p>© {new Date().getFullYear()} Quartzo. Todos os direitos reservados.</p>
            </Footer>
        </Container>
    );
};
