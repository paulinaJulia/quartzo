from global_functions.redirect import reverse_lazy_plus


def make_item_breadcrumb(item: dict) -> dict:
    return {
        "name": item.get("name", ""),
        "slug": item.get("slug", ""),
        "link": reverse_lazy_plus(
            item.get("url_name", ""),
            url_params=item.get("url_params", []),
            get_params=item.get("get_params", {}),
        ).url
        if item.get("url_name", None)
        else "",
    }
