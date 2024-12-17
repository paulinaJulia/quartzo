from django.http import HttpResponseRedirect
from django.urls import reverse
from django.utils.http import urlencode


def reverse_lazy_plus(
    url_name: str, url_params=[], get_params={}, hash="", just_uri=False
) -> HttpResponseRedirect:
    """
    Função que funciona como a reverse_lazy, mas com parâmetros adicionais, que são os parâmetros GET e alguma #.
    Recebemos o nome da url, os parâmetros da url (lista) e os parâmetros GET (dicionário).

    Caso desejse somente a url, ou seja, somente a string gerada (útil em funções como get_success_url), passe o último parâmetro (just_uri) como True

    Exemplo de entrada: reverse_lazy_plus('produto', url_params=[1, 'pedido_lente_contato'], get_params={'mensagem': 'Esta é uma mensagem'}, '#aba-6')
    Exemplo de url de saída: /produto/1/pedido_lente_contato?mensagem=Esta%20é%20uma%20mensagem#aba-6
    """

    url = reverse(url_name, args=url_params)
    params = urlencode(get_params).replace("+", " ")

    final_url = "{}?{}{}".format(url, params, hash)
    return final_url if just_uri else HttpResponseRedirect(final_url)
