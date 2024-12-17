from django.shortcuts import render


def error_404(request, exception):
    template = "errors/default_error_page.html"
    context = {
        "status_code": 404,
        "title": "Página não encontrada!",
        "message": "A página que você está procurando não existe.",
    }

    return render(
        request,
        template,
        context,
    )
