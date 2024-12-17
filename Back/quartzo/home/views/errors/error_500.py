from django.shortcuts import render


def error_500(request):
    template = "errors/default_error_page.html"
    context = {
        "status_code": 500,
        "title": "Erro no servidor!",
        "message": "Desculpe, algo de errado aconteceu do nosso lado.",
    }

    return render(
        request,
        template,
        context,
    )
