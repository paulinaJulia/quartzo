import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Header, Table, Form, Button, Footer, Modal } from "./styles";

export const RenovarContratos: React.FC = () => {
    const [contratos, setContratos] = useState<any[]>([]);
    const [imoveis, setImoveis] = useState<any[]>([]);
    const [selectedContrato, setSelectedContrato] = useState<any | null>(null);
    const [formData, setFormData] = useState({
        tipo_contrato: "",
        valor: "",
        forma_pagamento: "",
        data_inicio: "",
        data_fim: "",
        status: "",
        observacoes: "",
        cliente: "",
        imovel: "",
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const BASE_URL = process.env.REACT_APP_API_URL || "https://teste-paulina.novadata.com.br/";

    useEffect(() => {
        const fetchContratos = async () => {
            try {
                const response = await fetch(`${BASE_URL}api/contrato/`, {
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

        const fetchImoveis = async () => {
            try {
                const response = await fetch(`${BASE_URL}api/imovel/`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`Erro ao carregar imóveis: ${response.statusText}`);
                }

                const data = await response.json();
                setImoveis(data.results || []);
            } catch (error: any) {
                console.error("Erro ao carregar imóveis:", error);
            }
        };


        fetchContratos();
        fetchImoveis();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSelectContrato = (contrato: any) => {
        setSelectedContrato(contrato);
        setFormData({
            tipo_contrato: contrato.tipo_contrato || "",
            valor: contrato.valor || "",
            forma_pagamento: contrato.forma_pagamento || "",
            data_inicio: contrato.data_inicio || "",
            data_fim: contrato.data_fim || "",
            status: contrato.status || "",
            observacoes: contrato.observacoes || "",
            cliente: contrato.cliente || "",
            imovel: contrato.imovel || "",
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedContrato) return;
        let errorMessage = ""
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/contrato/${selectedContrato.id}/`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            });
        
            if (!response.ok) {
                const errorData = await response.json();
                errorMessage = errorData.detail || 
                    Object.values(errorData).flat().join(", ");
                throw new Error(errorMessage);
            }
        
            alert("Contrato renovado com sucesso!");
            setSelectedContrato(null);
        
            const updatedContratos = contratos.map((contrato) =>
                contrato.id === selectedContrato.id ? { ...contrato, ...formData } : contrato
            );
            setContratos(updatedContratos);
        } catch (error: any) {
            alert(`Erro ao renovar o contrato: ${errorMessage}`);
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
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {contratos.map((contrato) => (
                        <tr key={contrato.id}>
                            <td>{contrato.id}</td>
                            <td>{contrato.cliente_name}</td>
                            <td>{contrato.data_inicio}</td>
                            <td>{contrato.data_fim}</td>
                            <td style={{ color: contrato.status === 'ativo' ? 'green' : 'red' }}>{contrato.status}</td>
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
                    <div>
                        <label>Tipo de Contrato:</label>
                        <select
                            name="tipo_contrato"
                            value={formData.tipo_contrato}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Selecione o tipo de contrato</option>
                            {[
                                { value: "aluguel", label: "Aluguel" },
                                { value: "venda", label: "Venda" },
                            ].map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
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
                        <div>
                            <label>Forma de Pagamento:</label>
                            <select
                                name="forma_pagamento"
                                value={formData.forma_pagamento}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Selecione a forma de pagamento</option>
                                {[
                                    { value: "boleto", label: "Boleto" },
                                    { value: "cartao", label: "Cartão de Crédito" },
                                    { value: "pix", label: "PIX" },
                                    { value: "transferencia", label: "Transferência Bancária" },
                                ].map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <label>
                            Data de Início:
                            <input
                                type="date"
                                name="data_inicio"
                                value={formData.data_inicio}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            Data de Término:
                            <input
                                type="date"
                                name="data_fim"
                                value={formData.data_fim}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <div>
                            <label>Status:</label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Selecione o status</option>
                                {[
                                    { value: "ativo", label: "Ativo" },
                                    { value: "cancelado", label: "Cancelado" },
                                    { value: "finalizado", label: "Finalizado" },
                                ].map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <label>
                            Observações:
                            <input
                                name="observacoes"
                                value={formData.observacoes}
                                onChange={handleInputChange}
                            />
                        </label>
                        <div>
                            <label>Imóvel:</label>
                            <p>
                                {
                                    imoveis.find((imovel) => imovel.id === selectedContrato?.imovel)?.endereco || 
                                    "Imóvel não disponível"
                                }
                            </p>
                        </div>
                        <Button type="submit">Confirmar Renovação</Button>
                        <Button onClick={() => setSelectedContrato(null)}>Cancelar</Button>
                    </Form>
                </Modal>
            )}

            <Button onClick={() => navigate("/main")} style={{ marginTop: "20px" }}>
                Voltar ao Menu
            </Button>

            <Footer>
                <p>© {new Date().getFullYear()} Quartzo. Todos os direitos reservados.</p>
            </Footer>
        </Container>
    );
};
