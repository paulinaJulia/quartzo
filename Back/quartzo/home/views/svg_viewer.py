from django.shortcuts import render


def svg_viewer(request):
    context = {}

    return render(
        request,
        "svg_viewer/svg_viewer.html",
        context,
    )
