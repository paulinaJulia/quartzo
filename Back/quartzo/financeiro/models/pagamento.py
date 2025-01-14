from django.contrib.auth.models import User
from django.db import models


class Pagamento(models.Model):
    contrato = models.ForeignKey(
        "financeiro.Contrato",
        on_delete=models.CASCADE,
        verbose_name="Contrato",
        related_name="pagamentos",
    )
    cliente = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        verbose_name="Cliente",
        null=True,
        blank=True,
    )
    valor_pago = models.FloatField(
        verbose_name="Valor Pago",
    )
    data_pagamento = models.DateField(
        verbose_name="Data de Pagamento",
    )
    data_criacao = models.DateTimeField(
        verbose_name="Data de Criação",
        auto_now_add=True,
    )
    data_atualizacao = models.DateTimeField(
        verbose_name="Data de Atualização",
        auto_now=True,
    )

    def calcular_valor_pendente(self):
        """Calcula o valor pendente no caso de aluguel."""
        if self.contrato.tipo_contrato == "aluguel":
            # Soma todos os pagamentos relacionados ao contrato
            total_pago = self.contrato.pagamentos.aggregate(
                total=models.Sum("valor_pago")
            )["total"] or 0
            # Calcula o valor pendente baseado no valor do contrato
            return max(0, self.contrato.valor - total_pago)
        return 0  # Para outros tipos de contrato, não há valor pendente

    @property
    def valor_pendente(self):
        return self.calcular_valor_pendente()

    def __str__(self):
        return f"Pagamento de {self.valor_pago} para {self.contrato.imovel.endereco}"

    class Meta:
        app_label = "financeiro"
        verbose_name = "Pagamento"
        verbose_name_plural = "Pagamentos"
        ordering = ["-data_pagamento"]
