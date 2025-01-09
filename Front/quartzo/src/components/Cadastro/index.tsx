import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Input, Button, Header, TextArea, Select } from "./styles";

export const CadastroImovel: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        endereco: "",
        categoria: "",
        preco: "",
        descricao: "",
        detalhesExtras: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("http://127.0.0.1:8000/imoveis", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Imóvel cadastrado com sucesso!");
                navigate("/main");
            } else {
                alert("Erro ao cadastrar imóvel.");
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            alert("Erro ao conectar com o servidor.");
        }
    };

    return (
        <Container>
            <Header>
                <h1>Cadastro de Imóveis</h1>
                <p>Preencha as informações abaixo para cadastrar um novo imóvel.</p>
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
                <Button type="submit">Cadastrar Imóvel</Button>
                <Button type="button" onClick={() => navigate("/main")}>
                    Voltar ao Menu
                </Button>
            </Form>
        </Container>
    );
};
