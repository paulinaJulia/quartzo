from django.shortcuts import render


def design_system(request):
    context = {}

    return render(
        request,
        "home/design_system.html",
        context,
    )
