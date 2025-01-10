import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Form, Input, Button, Header, TextArea, Select } from "./styles";

export const EditarImovel: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [formData, setFormData] = useState({
        endereco: "",
        categoria: "",
        preco: "",
        descricao: "",
        detalhesExtras: "",
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchImovel = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/imoveis/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setFormData({
                        endereco: data.endereco || "",
                        categoria: data.categoria || "",
                        preco: data.preco || "",
                        descricao: data.descricao || "",
                        detalhesExtras: data.detalhesExtras || "",
                    });
                    setIsLoading(false);
                } else {
                    alert("Erro ao carregar os dados do imóvel.");
                    navigate("/main");
                }
            } catch (error) {
                console.error("Erro ao buscar imóvel:", error);
                alert("Erro ao conectar com o servidor.");
                navigate("/main");
            }
        };

        fetchImovel();
    }, [id, navigate]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://127.0.0.1:8000/imoveis/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Imóvel atualizado com sucesso!");
                navigate("/main");
            } else {
                alert("Erro ao atualizar imóvel.");
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            alert("Erro ao conectar com o servidor.");
        }
    };

    if (isLoading) {
        return <p>Carregando...</p>;
    }

    return (
        <Container>
            <Header>
                <h1>Editar Imóvel</h1>
                <p>Atualize as informações abaixo e salve as alterações.</p>
            </Header>

            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="endereco"
                    placeholder="Endereço do Imóvel"
                    value={formData.endereco}
                    onChange={handleChange}
                    required
                />
                <Select
                    name="categoria"
                    value={formData.categoria}
                    onChange={handleChange}
                    required
                >
                    <option value="">Selecione a Categoria</option>
                    <option value="apartamento">Apartamento</option>
                    <option value="casa">Casa</option>
                    <option value="comercial">Comercial</option>
                    <option value="terreno">Terreno</option>
                </Select>
                <Input
                    type="number"
                    name="preco"
                    placeholder="Preço (R$)"
                    value={formData.preco}
                    onChange={handleChange}
                    required
                />
                <TextArea
                    name="descricao"
                    placeholder="Descrição do Imóvel"
                    value={formData.descricao}
                    onChange={handleChange}
                    rows={4}
                    required
                ></TextArea>
                <TextArea
                    name="detalhesExtras"
                    placeholder="Detalhes Extras (opcional)"
                    value={formData.detalhesExtras}
                    onChange={handleChange}
                    rows={3}
                ></TextArea>
                <Button type="submit">Salvar Alterações</Button>
                <Button type="button" onClick={() => navigate("/main")}>
                    Cancelar
                </Button>
            </Form>
        </Container>
    );
};
