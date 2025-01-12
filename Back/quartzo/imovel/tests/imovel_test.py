from django.contrib.auth.models import User
from imovel.models import Imovel
from rest_framework import status
from rest_framework.test import APITestCase


class ImovelViewSetTest(APITestCase):
    def setUp(self):
        """Configura os dados para os testes"""
        Imovel.objects.all().delete()
        self.user = User.objects.create_user(username="testuser", password="12345")
        self.client.login(username="testuser", password="12345")

        self.imovel = Imovel.objects.create(
            endereco="Rua Teste, 123",
            tipo="aluguel",
            valor=1500.00,
            status="disponível",
            descricao="Apartamento bem localizado",
            usuario_criacao=self.user,
        )

        self.url_list = "/api/imovel/"
        self.url_detail = f"/api/imovel/{self.imovel.pk}/"

    def test_list_imoveis(self):
        """Testa se a listagem de imóveis está funcionando"""
        response = self.client.get(self.url_list)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data['results']), 1)

    def test_create_imovel(self):
        """Testa se um novo imóvel pode ser criado"""
        data = {
            "endereco": "Rua Nova, 456",
            "tipo": "venda",
            "valor": 250000.00,
            "status": "disponível",
            "descricao": "Casa com 3 quartos",
        }
        response = self.client.post(self.url_list, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Imovel.objects.count(), 2)

    def test_create_imovel_valor_invalido(self):
        """Testa se a criação de um imóvel com valor inválido é rejeitada"""
        data = {
            "endereco": "Rua Nova, 456",
            "tipo": "venda",
            "valor": -100.00,
            "status": "disponível",
            "descricao": "Casa com valor inválido",
        }
        response = self.client.post(self.url_list, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("valor", response.data)
        self.assertEqual(Imovel.objects.count(), 1)

    def test_update_imovel(self):
        """Testa se um imóvel pode ser atualizado"""
        data = {
            "endereco": "Rua Atualizada, 123",
            "tipo": "aluguel",
            "valor": 2000.00,
            "status": "alugado",
            "descricao": "Apartamento atualizado",
        }
        response = self.client.put(self.url_detail, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        self.imovel.refresh_from_db()
        self.assertEqual(self.imovel.endereco, "Rua Atualizada, 123")
        self.assertEqual(self.imovel.valor, 2000.00)
        self.assertEqual(self.imovel.status, "alugado")

    def test_delete_imovel(self):
        """Testa se um imóvel pode ser deletado"""
        response = self.client.delete(self.url_detail)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Imovel.objects.count(), 0)
