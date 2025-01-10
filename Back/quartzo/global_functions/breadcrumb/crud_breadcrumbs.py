from global_functions.utils import camel_to_snake_case


def create_breadcrumb(klass, name=None, url_params=[], get_params={}):
    lower_model_verbose_name = klass._meta.verbose_name.lower()
    snake_model_name = camel_to_snake_case(klass.__name__)
    slug_and_url_name = f"{snake_model_name}_create"

    if not name:
        name = f"Adicionar {lower_model_verbose_name}"

    return {
        "name": name,
        "slug": slug_and_url_name,
        "url_name": slug_and_url_name,
        "url_params": url_params,
        "get_params": get_params,
    }


def delete_breadcrumb(klass, name=None, url_params=[], get_params={}):
    lower_model_verbose_name = klass._meta.verbose_name.lower()
    snake_model_name = camel_to_snake_case(klass.__name__)
    slug_and_url_name = f"{snake_model_name}_delete"

    if not name:
        name = f"Excluir {lower_model_verbose_name}"

    return {
        "name": name,
        "slug": slug_and_url_name,
        "url_name": slug_and_url_name,
        "url_params": url_params,
        "get_params": get_params,
    }


def detail_breadcrumb(klass, name=None, url_params=[], get_params={}):
    snake_model_name = camel_to_snake_case(klass.__name__)
    slug_and_url_name = f"{snake_model_name}_detail"

    if not name:
        name = "Detalhes"

    return {
        "name": name,
        "slug": slug_and_url_name,
        "url_name": slug_and_url_name,
        "url_params": url_params,
        "get_params": get_params,
    }


def list_breadcrumb(klass, name=None, url_params=[], get_params={}):
    model_verbose_name_plural = klass._meta.verbose_name_plural
    snake_model_name = camel_to_snake_case(klass.__name__)
    slug_and_url_name = f"{snake_model_name}_list"

    if not name:
        name = model_verbose_name_plural

    return {
        "name": name,
        "slug": slug_and_url_name,
        "url_name": slug_and_url_name,
        "url_params": url_params,
        "get_params": get_params,
    }


def update_breadcrumb(klass, name=None, url_params=[], get_params={}):
    lower_model_verbose_name = klass._meta.verbose_name.lower()
    snake_model_name = camel_to_snake_case(klass.__name__)
    slug_and_url_name = f"{snake_model_name}_update"

    if not name:
        name = f"Editar {lower_model_verbose_name}"

    return {
        "name": name,
        "slug": slug_and_url_name,
        "url_name": slug_and_url_name,
        "url_params": url_params,
        "get_params": get_params,
    }
