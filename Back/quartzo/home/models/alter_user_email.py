from django.contrib.auth.models import User
from django.db import models


class AlterUserEmail(models.Model):
    """
    A classe AlterUserEmail serve somente para alterar as propriedades de e-mail do usuário.
    Deixamos o campo único e obrigatório, assim não teremos problemas no login do mesmo.
    """

    User._meta.get_field("email")._unique = True
    User._meta.get_field("email").blank = False

    class Meta:
        app_label = "home"
