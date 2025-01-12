from django.contrib.auth.models import User
from django.utils.timezone import now, timedelta
from rest_framework import status
from rest_framework.test import APITestCase
from imovel.models import Imovel
from financeiro.models import Contrato


class ContratoViewSetTest(APITestCase):
    def setUp(self):
        """Configura os dados para os testes"""
        Contrato.objects.all().delete()
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

        self.contrato = Contrato.objects.create(
            cliente=self.user,
            imovel=self.imovel,
            tipo_contrato="aluguel",
            valor=1500.00,
            forma_pagamento="boleto",
            data_inicio=now().date(),
            data_fim=(now() + timedelta(days=30)).date(),
            status="ativo",
        )

        self.url_list = "/api/contrato/"
        self.url_detail = f"/api/contrato/{self.contrato.pk}/"

    def test_list_contratos(self):
        """Testa se a listagem de contratos está funcionando"""
        response = self.client.get(self.url_list)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Verifica se apenas 1 contrato foi retornado
        self.assertEqual(len(response.data['results']), 1)

        # Verifica o conteúdo do contrato retornado
        contrato = response.data['results'][0]
        self.assertEqual(contrato['cliente'], self.user.id)
        self.assertEqual(contrato['imovel'], self.imovel.id)
        self.assertEqual(contrato['tipo_contrato'], "aluguel")
        self.assertEqual(contrato['valor'], 1500.00)

    def test_create_contrato(self):
        """Testa se um novo contrato pode ser criado"""
        data = {
            "cliente": self.user.id,
            "imovel": self.imovel.id,
            "tipo_contrato": "venda",
            "valor": 250000.00,
            "forma_pagamento": "pix",
            "data_inicio": now().date(),
            "data_fim": (now() + timedelta(days=365)).date(),
            "status": "ativo",
        }
        response = self.client.post(self.url_list, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Contrato.objects.count(), 2)

    def test_create_contrato_valor_invalido(self):
        """Testa se a criação de um contrato com valor inválido é rejeitada"""
        data = {
            "cliente": self.user.id,
            "imovel": self.imovel.id,
            "tipo_contrato": "venda",
            "valor": -100.00,
            "forma_pagamento": "pix",
            "data_inicio": now().date(),
            "status": "ativo",
        }
        response = self.client.post(self.url_list, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("valor", response.data)
        self.assertEqual(Contrato.objects.count(), 1)

    def test_update_contrato(self):
        """Testa se um contrato pode ser atualizado"""
        data = {
            "cliente": self.user.id,
            "imovel": self.imovel.id,
            "tipo_contrato": "aluguel",
            "valor": 2000.00,
            "forma_pagamento": "transferencia",
            "data_inicio": now().date(),
            "data_fim": (now() + timedelta(days=60)).date(),
            "status": "ativo",
        }
        response = self.client.put(self.url_detail, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        self.contrato.refresh_from_db()
        self.assertEqual(self.contrato.valor, 2000.00)
        self.assertEqual(self.contrato.forma_pagamento, "transferencia")

    def test_delete_contrato(self):
        """Testa se um contrato pode ser deletado"""
        response = self.client.delete(self.url_detail)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Contrato.objects.count(), 0)
