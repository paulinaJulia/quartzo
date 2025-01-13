from datetime import date

from django.contrib.auth.models import User
from financeiro.models import Contrato, Pagamento
from imovel.models import Imovel
from rest_framework import status
from rest_framework.test import APITestCase


class PagamentoViewSetTest(APITestCase):
    def setUp(self):
        """Configura os dados para os testes"""
        self.user = User.objects.create_user(username="testuser", password="12345")
        
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
            data_inicio=date.today(),
            status="ativo",
        )
        
        self.pagamento = Pagamento.objects.create(
            contrato=self.contrato,
            valor_pago=500.00,
            data_pagamento=date.today(),
        )

        self.url_list = "/api/pagamento/"
        self.url_detail = f"/api/pagamento/{self.pagamento.pk}/"
        
        self.client.login(username="testuser", password="12345")
        
    def test_list_pagamentos(self):
        """Testa se a listagem de pagamentos está funcionando"""
        response = self.client.get(self.url_list)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data['results']), 1)

    def test_create_pagamento(self):
        """Testa se um novo pagamento pode ser criado"""
        data = {
            "contrato": self.contrato.id,
            "usuario": self.user.id,
            "valor_pago": 500.00,
            "data_pagamento": date.today(),
        }
        response = self.client.post(self.url_list, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Pagamento.objects.count(), 2)

    def test_calcular_valor_pendente(self):
        """Testa o cálculo do valor pendente de um pagamento"""
        pagamento = Pagamento.objects.create(
            contrato=self.contrato,
            valor_pago=500.00,
            data_pagamento=date.today(),
        )
        valor_pendente = pagamento.calcular_valor_pendente()
        self.assertEqual(valor_pendente, 500.00)

    def test_create_pagamento_valor_invalido(self):
        """Testa se a criação de um pagamento com valor inválido é rejeitada"""
        data = {
            "contrato": self.contrato.id,
            "usuario": self.user.id,
            "valor_pago": -100.00,  # valor negativo
            "data_pagamento": date.today(),
        }
        response = self.client.post(self.url_list, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("valor_pago", response.data)
        self.assertEqual(Pagamento.objects.count(), 1)

    def test_delete_pagamento(self):
        """Testa se um pagamento pode ser deletado"""
        response = self.client.delete(self.url_detail)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Pagamento.objects.count(), 0)
