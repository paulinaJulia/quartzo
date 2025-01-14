import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Header, Table, Button, Footer } from "./styles";
import jsPDF from "jspdf";
import "jspdf-autotable";

export const GerarRelatorios: React.FC = () => {
    const [relatorios, setRelatorios] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRelatorios = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/api/imovel/", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                });

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

    const exportToPDF = () => {
        const doc = new jsPDF();
    
        doc.text("Relatório Financeiro", 14, 10);
    
        // Cabeçalhos da tabela
        const headers = ["Data", "Descrição", "Valor", "Tipo"];
        let startY = 20;
    
        headers.forEach((header, index) => {
            doc.text(header, 14 + index * 40, startY);
        });
    
        startY += 10;
    
        // Linhas da tabela
        relatorios.forEach((relatorio) => {
            doc.text(relatorio.data, 14, startY);
            doc.text(relatorio.descricao, 54, startY);
            doc.text(`R$ ${relatorio.valor.toFixed(2)}`, 94, startY);
            doc.text(relatorio.tipo, 134, startY);
            startY += 10;
        });
    
        doc.save("relatorio-financeiro.pdf");
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
                            <td>{relatorio.data}</td>
                            <td>{relatorio.descricao}</td>
                            <td>{`R$ ${relatorio.valor.toFixed(2)}`}</td>
                            <td>{relatorio.tipo}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Button onClick={exportToPDF} style={{ marginTop: "20px" }}>
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
