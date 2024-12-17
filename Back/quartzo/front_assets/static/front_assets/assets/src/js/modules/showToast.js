export default function showToast() {
	const { url } = GLOBAL
	if (url.searchParams.has('mensagem_toastify')) {
		const mensagemToastify = url.searchParams.get('mensagem_toastify')
		Toastify({
			text: mensagemToastify,
			duration: 3000,
			position: 'center'
		}).showToast();

		url.searchParams.set('mensagem_toastify', '');
		url.search = ""
		window.history.pushState({}, '', url);
	}
}