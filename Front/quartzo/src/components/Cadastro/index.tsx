import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Input, Button, Header, TextArea, Select } from "./styles";

export const CadastroImovel: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        endereco: "",
        categoria: "",
        tipo: "",
        valor: "",
        status: "",
        descricao: "",
    });
    const BASE_URL = process.env.REACT_APP_API_URL || "https://teste-paulina.novadata.com.br/";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
            console.log("Enviando dados:", formData);

            const token = localStorage.getItem("token");

            const response = await fetch(`${BASE_URL}api/imovel/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                alert("Imóvel cadastrado com sucesso!");
                navigate("/main");
            } else {
                const errorText = await response.text();
                console.error("Erro ao cadastrar:", errorText);
                alert(`Erro ao cadastrar imóvel: ${errorText}`);
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
                <Select
                    name="tipo"
                    value={formData.tipo}
                    onChange={handleChange}
                    required
                >
                    <option value="">Selecione o tipo</option>
                    <option value="aluguel">Aluguel</option>
                    <option value="venda">Venda</option>
                </Select>
                <Input
                    type="number"
                    name="valor"
                    placeholder="Preço (R$)"
                    value={formData.valor}
                    onChange={handleChange}
                    required
                />
                <Select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    required
                >
                    <option value="">Selecione o Status</option>
                    <option value="disponivel">Disponivel</option>
                    <option value="indisponivel">Indisponivel</option>
                </Select>
                <TextArea
                    name="descricao"
                    placeholder="Descrição do Imóvel"
                    value={formData.descricao}
                    onChange={handleChange}
                    rows={4}
                    required
                ></TextArea>
                <Button type="submit">Cadastrar Imóvel</Button>
                <Button type="button" onClick={() => navigate("/main")}>
                    Voltar ao Menu
                </Button>
            </Form>
        </Container>
    );
};
