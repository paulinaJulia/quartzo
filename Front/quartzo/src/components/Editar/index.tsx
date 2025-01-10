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
                const response = await fetch(`/api/imoveis/${id}`);
                if (!response.ok) {
                    throw new Error("Erro ao buscar dados do imóvel.");
                }
                const data = await response.json();
                setImovel(data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchImovel();
    }, [id]);

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
                <Button type="submit">Salvar Alterações</Button>
            </Form>
        </Container>
    );
};
