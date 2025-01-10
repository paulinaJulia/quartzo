from django.shortcuts import render


def error_403(request, exception):
    template = "errors/default_error_page.html"
    context = {
        "status_code": 403,
        "title": "Acesso negado!",
        "message": "Você não tem permissão para acessar esta página.",
    }

    return render(
        request,
        template,
        context,
    )
