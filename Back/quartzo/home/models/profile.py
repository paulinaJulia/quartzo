from django.contrib.auth.models import User
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

    def __str__(self):
        return f"{self.usuario}"

    class Meta:
        app_label = "home"
        verbose_name = "Profile"
        verbose_name_plural = "Profiles"
