import threading


def make_thread(func: "function", function_args=[]) -> None:
    """
    Função para fazer uma thread, ou seja, algum processo em segundo plano,

    == params ==

    func:
        Função a ser executada
    function args:
        Lista de argumentos da função em questão

    == exemple ==

    from funcoes_utilitarias.threading import make_thread

    make_thread(self.notiticar_aprovacao, usuario)
    """

    threading.Thread(target=func, args=function_args, daemon=True).start()
