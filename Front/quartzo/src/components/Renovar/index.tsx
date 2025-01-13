import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Header, Table, Form, Button, Footer, Modal } from "./styles";

export const RenovarContratos: React.FC = () => {
    const [contratos, setContratos] = useState<any[]>([]);
    const [selectedContrato, setSelectedContrato] = useState<any | null>(null);
    const [formData, setFormData] = useState({
        prazo: "",
        valor: "",
        condicoes: "",
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    // Carrega os contratos ativos
    useEffect(() => {
        const fetchContratos = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/api/imovel/", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`Erro ao carregar contratos: ${response.statusText}`);
                }

                const data = await response.json();
                setContratos(data.results || []);
            } catch (error: any) {
                console.error("Erro ao carregar contratos:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchContratos();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSelectContrato = (contrato: any) => {
        setSelectedContrato(contrato);
        setFormData({
            prazo: contrato.prazo || "",
            valor: contrato.valor || "",
            condicoes: contrato.condicoes || "",
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedContrato) return;

        try {
            const response = await fetch(`http://127.0.0.1:8000/api/imovel/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({
                    prazo: formData.prazo,
                    valor: formData.valor,
                    condicoes: formData.condicoes,
                }),
            });

            if (!response.ok) {
                throw new Error(`Erro ao renovar contrato: ${response.statusText}`);
            }

            alert("Contrato renovado com sucesso!");
            setSelectedContrato(null);
            const updatedContratos = contratos.map((contrato) =>
                contrato.id === selectedContrato.id
                    ? { ...contrato, prazo: formData.prazo, valor: formData.valor, condicoes: formData.condicoes }
                    : contrato
            );
            setContratos(updatedContratos);
        } catch (error: any) {
            console.error("Erro ao renovar contrato:", error);
            alert("Erro ao renovar o contrato.");
        }
    };

    if (error) {
        return (
            <Container>
                <Header>
                    <h1>Renovação de Contratos</h1>
                </Header>
                <p style={{ color: "red" }}>Erro ao carregar contratos: {error}</p>
                <Button onClick={() => navigate("/main")}>Voltar ao Menu</Button>
            </Container>
        );
    }

    if (loading) {
        return (
            <Container>
                <Header>
                    <h1>Renovação de Contratos</h1>
                </Header>
                <p>Carregando...</p>
                <Button onClick={() => navigate("/main")}>Voltar ao Menu</Button>
            </Container>
        );
    }

    return (
        <Container>
            <Header>
                <h1>Renovação de Contratos</h1>
            </Header>
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Cliente</th>
                        <th>Data de Início</th>
                        <th>Data de Término</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {contratos.map((contrato) => (
                        <tr key={contrato.id}>
                            <td>{contrato.id}</td>
                            <td>{contrato.cliente}</td>
                            <td>{contrato.data_inicio}</td>
                            <td>{contrato.data_termino}</td>
                            <td>
                                <Button onClick={() => handleSelectContrato(contrato)}>Renovar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {selectedContrato && (
                <Modal>
                    <h2>Renovar Contrato</h2>
                    <Form onSubmit={handleSubmit}>
                        <label>
                            Prazo:
                            <input
                                type="text"
                                name="prazo"
                                value={formData.prazo}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            Valor:
                            <input
                                type="text"
                                name="valor"
                                value={formData.valor}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            Condições de Pagamento:
                            <input
                                type="text"
                                name="condicoes"
                                value={formData.condicoes}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <Button type="submit">Confirmar Renovação</Button>
                        <Button onClick={() => setSelectedContrato(null)}>Cancelar</Button>
                    </Form>
                </Modal>
            )}

            <Button onClick={() => navigate("/menu")} style={{ marginTop: "20px" }}>
                Voltar ao Menu
            </Button>

            <Footer>
                <p>© {new Date().getFullYear()} Quartzo. Todos os direitos reservados.</p>
            </Footer>
        </Container>
    );
};
