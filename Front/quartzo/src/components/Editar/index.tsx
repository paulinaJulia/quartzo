import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Header, Form, Input, TextArea, Button, Select } from "./styles";

export const EditarImovel: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [imovel, setImovel] = useState<any>(null);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState<string | null>(null); 
    const token = localStorage.getItem("token");
    const BASE_URL = process.env.REACT_APP_API_URL || "http://167.234.232.111/";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setImovel({ ...imovel, [name]: value });
    };

    useEffect(() => {
        const fetchImovel = async () => {
            try {
                

                const response = await fetch(`${BASE_URL}api/imovel/${id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                });

                if (!response.ok) {
                    throw new Error(`Erro na API: ${response.statusText}`);
                }

                const data = await response.json();
                if (!data) {
                    throw new Error("Nenhum dado encontrado para este imóvel.");
                }

                setImovel(data);
            } catch (error: any) {
                console.error("Erro ao carregar os dados do imóvel:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchImovel();
    }, [id]);

    const handleSave = async () => {
        try {
            const response = await fetch(`${BASE_URL}api/imovel/${id}/`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(imovel),
            });

            if (response.ok) {
                alert("Imóvel atualizado com sucesso!");
            } else {
                const errorData = await response.json();
                alert(`Erro ao atualizar imóvel: ${errorData.message || "Erro desconhecido"}`);
            }
        } catch (error) {
            console.error("Erro ao salvar as alterações:", error);
            alert("Erro ao conectar com o servidor.");
        }
    };

    if (error) {
        return (
            <Container>
                <Header>
                    <h1>Editar Imóvel</h1>
                </Header>
                <p style={{ color: "red" }}>Erro ao carregar os dados do imóvel: {error}</p>
            </Container>
        );
    }

    if (loading) {
        return (
            <Container>
                <Header>
                    <h1>Editar Imóvel</h1>
                </Header>
                <p>Carregando...</p>
            </Container>
        );
    }

    return (
        <Container>
            <Header>
                <h1>Editar Imóvel</h1>
            </Header>
            <Form>
                <Input
                    type="text"
                    value={imovel.endereco}
                    onChange={(e) =>
                        setImovel({ ...imovel, endereco: e.target.value })
                    }
                    placeholder="Endereço"
                />
                <Select
                    name="categoria"
                    value={imovel.categoria}
                    onChange={handleChange}
                    required
                >
                    <option value="">Selecione a Categoria</option>
                    <option value="apartamento">Apartamento</option>
                    <option value="casa">Casa</option>
                    <option value="comercial">Comercial</option>
                    <option value="terreno">Terreno</option>
                </Select>
                <Select
                    name="tipo"
                    value={imovel.tipo}
                    onChange={handleChange}
                    required
                >
                    <option value="">Selecione o tipo</option>
                    <option value="aluguel">Aluguel</option>
                    <option value="venda">Venda</option>
                </Select>
                <Input
                    type="number"
                    value={imovel.valor}
                    onChange={(e) =>
                        setImovel({ ...imovel, valor: e.target.value })
                    }
                    placeholder="Preço"
                />
                <Select
                    name="status"
                    value={imovel.status}
                    onChange={handleChange}
                    required
                >
                    <option value="">Selecione o Status</option>
                    <option value="disponivel">Disponivel</option>
                    <option value="indisponivel">Indisponivel</option>
                </Select>
                <TextArea
                    value={imovel.descricao}
                    onChange={(e) =>
                        setImovel({ ...imovel, descricao: e.target.value })
                    }
                    placeholder="Descrição"
                />
                <Button type="button" onClick={handleSave}>Salvar Alterações</Button>
            </Form>
        </Container>
    );
};
