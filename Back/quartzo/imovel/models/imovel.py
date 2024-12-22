from django.contrib.auth.models import User
from django.db import models


class Imovel(models.Model):
    TIPO_CHOICES = [
        ("aluguel", "Aluguel"),
        ("venda", "Venda"),
    ]

    endereco = models.CharField(
        verbose_name="Endereço",
        max_length=255,
    )
    tipo = models.CharField(
        verbose_name="Tipo",
        max_length=50,
        choices=TIPO_CHOICES,
    )
    valor = models.FloatField(
        verbose_name="Valor",
    )
    status = models.CharField(
        verbose_name="Status",
        max_length=50,
    )
    descricao = models.TextField(
        verbose_name="Descrição",
        blank=True,
        null=True,
    )

    usuario_criacao = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        verbose_name="Usuário de criação",
        blank=True,
        null=True,
    )

    usuario_atualizacao = models.ForeignKey(
        User,
        related_name="%(class)s_requests_modified",
        verbose_name="Usuário de atualização",
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
    )

    data_criacao = models.DateTimeField(
        verbose_name="Data de criação", auto_now_add=True
    )

    data_atualizacao = models.DateTimeField(
        verbose_name="Data de atualização", auto_now=True
    )

    def save(self, *args, **kwargs):
        """Sobrescrita do método save para realizarmos ações personalizadas."""
        from crum import get_current_user

        user = get_current_user()
        if user and not user.pk:
            user = None
        if not self.pk:
            self.usuario_criacao = user
        self.usuario_atualizacao = user

        super(Imovel, self).save(*args, **kwargs)

    def __str__(self):
        """Retorna uma representação do objeto como string."""
        return f"{self.endereco} - {self.tipo}"

    class Meta:
        """Sub classe para definir meta atributos da classe principal."""

        app_label = "imovel"
        verbose_name = "Imovel"
        verbose_name_plural = "Imoveis"
