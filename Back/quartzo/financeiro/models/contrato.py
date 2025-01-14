from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
from django.db import models
from django.utils.timezone import now


class Contrato(models.Model):
    TIPO_CONTRATO_CHOICES = [
        ("aluguel", "Aluguel"),
        ("venda", "Venda"),
    ]

    FORMA_PAGAMENTO_CHOICES = [
        ("boleto", "Boleto"),
        ("cartao", "Cartão de Crédito"),
        ("pix", "PIX"),
        ("transferencia", "Transferência Bancária"),
    ]

    STATUS_CHOICES = [
        ("ativo", "Ativo"),
        ("cancelado", "Cancelado"),
        ("finalizado", "Finalizado"),
    ]

    cliente = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        verbose_name="Cliente",
        related_name="contratos",
    )
    imovel = models.ForeignKey(
        "imovel.Imovel",
        on_delete=models.CASCADE,
        verbose_name="Imóvel",
        related_name="contratos",
    )
    tipo_contrato = models.CharField(
        max_length=50,
        choices=TIPO_CONTRATO_CHOICES,
        verbose_name="Tipo de Contrato",
    )
    valor = models.FloatField(
        verbose_name="Valor a ser Pago Mensalmente",
    )
    forma_pagamento = models.CharField(
        max_length=50,
        choices=FORMA_PAGAMENTO_CHOICES,
        verbose_name="Forma de Pagamento",
    )
    data_inicio = models.DateField(
        verbose_name="Data de Início",
    )
    data_fim = models.DateField(
        verbose_name="Data de Fim",
        blank=True,
        null=True,
    )
    status = models.CharField(
        max_length=50,
        choices=STATUS_CHOICES,
        verbose_name="Status",
        default="ativo",
    )
    observacoes = models.TextField(
        verbose_name="Observações",
        blank=True,
        null=True,
    )
    data_criacao = models.DateTimeField(
        verbose_name="Data de Criação",
        auto_now_add=True,
    )
    data_atualizacao = models.DateTimeField(
        verbose_name="Data de Atualização",
        auto_now=True,
    )


    def __str__(self):
        """Retorna uma representação do objeto como string."""
        return f"Contrato {self.tipo_contrato} - {self.cliente.username} - {self.imovel.endereco}"

    class Meta:
        """Subclasse para definir meta atributos da classe principal."""
        app_label = "financeiro"
        verbose_name = "Contrato"
        verbose_name_plural = "Contratos"
        ordering = ["-data_criacao"]
