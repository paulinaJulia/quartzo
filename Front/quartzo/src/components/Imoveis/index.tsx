import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Header, Button, Table, Input, SearchContainer } from "./styles";

export const Imoveis: React.FC = () => {
    const [imoveis, setImoveis] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>(""); // Estado para o termo de busca
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const BASE_URL = process.env.REACT_APP_API_URL || "https://teste-paulina.novadata.com.br/";

    const fetchImoveis = async (searchQuery: string = "") => {
        setLoading(true);
        try {
            const response = await fetch(
                `${BASE_URL}api/imovel/?search=${searchQuery}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                }
            );

            if (!response.ok) {
                throw new Error(`Erro na API: ${response.statusText}`);
            }

            const data = await response.json();
            setImoveis(data.results || []);
            console.log("Dados retornados da API:", data);
        } catch (error: any) {
            console.error("Erro ao carregar os imóveis:", error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchImoveis();
    }, []);

    const handleSearch = () => {
        fetchImoveis(searchTerm);
    };

    const removerImovel = async (id: number) => {
        const confirmacao = window.confirm("Tem certeza de que deseja remover este imóvel?");
        if (!confirmacao) return;

        try {
            const response = await fetch(`${BASE_URL}api/imovel/${id}/`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error(`Erro ao remover imóvel: ${response.statusText}`);
            }

            setImoveis(imoveis.filter((imovel) => imovel.id !== id));
            alert("Imóvel removido com sucesso!");
        } catch (error: any) {
            console.error("Erro ao remover imóvel:", error);
            alert("Erro ao remover o imóvel.");
        }
    };

    if (error) {
        return (
            <Container>
                <Header>
                    <h1>Lista de Imóveis</h1>
                </Header>
                <p style={{ color: "red" }}>Erro ao carregar imóveis: {error}</p>
                <Button onClick={() => navigate("/main")}>Voltar ao Menu</Button>
            </Container>
        );
    }

    if (loading) {
        return (
            <Container>
                <Header>
                    <h1>Lista de Imóveis</h1>
                </Header>
                <p>Carregando...</p>
                <Button onClick={() => navigate("/menu")}>Voltar ao Menu</Button>
            </Container>
        );
    }

    return (
        <Container>
            <Header>
                <h1>Lista de Imóveis</h1>
            </Header>
            <SearchContainer>
                <Input
                    type="text"
                    placeholder="Buscar por endereço"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button onClick={handleSearch}>Buscar</Button>
            </SearchContainer>
            {imoveis.length === 0 ? (
                <p>Nenhum imóvel encontrado.</p>
            ) : (
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Endereço</th>
                            <th>Categoria</th>
                            <th>Valor</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {imoveis.map((imovel) => (
                            <tr key={imovel.id}>
                                <td>{imovel.id}</td>
                                <td>{imovel.endereco}</td>
                                <td>{imovel.tipo}</td>
                                <td>R$ {imovel.valor}</td>
                                <td>
                                    <Button
                                        onClick={() =>
                                            navigate(`/editar-imoveis/${imovel.id}`)
                                        }
                                    >
                                        Editar
                                    </Button>
                                    <Button
                                        onClick={() => removerImovel(imovel.id)}
                                        style={{
                                            marginLeft: "10px",
                                            backgroundColor: "red",
                                            color: "white",
                                        }}
                                    >
                                        Remover
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
            <Button onClick={() => navigate("/main")}>Voltar ao Menu</Button>
        </Container>
    );
};
