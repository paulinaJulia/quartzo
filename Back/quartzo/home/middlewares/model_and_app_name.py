class ModelAndAppNameMiddleware(object):
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        return response

    def process_view(self, response, view_func, view_args, view_kwargs):
        try:
            app = view_func.view_class.model._meta.app_label
            model = view_func.view_class.model.__name__

            response.content_params.update(
                {
                    "app": app,
                    "model": model,
                }
            )
        except AttributeError:
            ...
