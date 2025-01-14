from django.contrib.auth.models import User
from django.core.validators import RegexValidator
from django.db import models


class Profile(models.Model):
    """
    A classe Profile serve para armazernar
    os(as) profiles do sistema.

    Além de fazer as implementações relacionadas
    a um único objeto do tipo Profile.
    """

    usuario = models.OneToOneField(
        User,
        verbose_name="Usuário",
        on_delete=models.CASCADE,
    )

    telefone = models.CharField(
        max_length=15, 
        validators=[
            RegexValidator(
                regex=r'^\+?1?\d{9,15}$',
                message="O telefone deve estar no formato: '+999999999'. Até 15 dígitos são permitidos."
            )
        ],
        verbose_name="Telefone",
        blank=True, null=True
    )
    cpf = models.CharField(
        max_length=14, 
        validators=[
            RegexValidator(
                regex=r'^\d{3}\.\d{3}\.\d{3}-\d{2}$',
                message="O CPF deve estar no formato: '000.000.000-00'."
            )
        ],
        unique=True,
        verbose_name="CPF",
        blank=True, null=True
    )

    def __str__(self):
        return f"{self.usuario}"

    class Meta:
        app_label = "home"
        verbose_name = "Profile"
        verbose_name_plural = "Profiles"
