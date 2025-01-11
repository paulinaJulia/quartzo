import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Header, Form, Input, TextArea, Button } from "./styles";

export const EditarImovel: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [imovel, setImovel] = useState<any>(null);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState<string | null>(null); 

    useEffect(() => {
        const fetchImovel = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/imovel/${id}`);
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
            const response = await fetch(`http://127.0.0.1:8000/api/imovel/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
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
                <Input
                    type="text"
                    value={imovel.categoria}
                    onChange={(e) =>
                        setImovel({ ...imovel, categoria: e.target.value })
                    }
                    placeholder="Categoria"
                />
                <Input
                    type="number"
                    value={imovel.preco}
                    onChange={(e) =>
                        setImovel({ ...imovel, preco: e.target.value })
                    }
                    placeholder="Preço"
                />
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
