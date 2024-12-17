from .make_item_breadcrumb import make_item_breadcrumb


def make_breadcrumb(breadcrumb_item: list) -> list:
    return list(map(make_item_breadcrumb, breadcrumb_item))
