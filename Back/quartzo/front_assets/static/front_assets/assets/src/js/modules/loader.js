export default function loader(loader) {

	const textDefault = ["Aguarde, estamos enviando seus dados", "Mais um pouco...", "Quase lá..."]
	const loaderEL = document.querySelector(".loader--container") || loader
	const pEl = loaderEL.querySelector("p")
	let interval


	/**
	* @param {array} opcional | recebe um array de objetos para ser mostrado 
	*/
	function show(options) {
		loaderEL.dataset.active = "true"
		let atual = 0;

		const obj = {
			textos: textDefault,
			time: 8000,
			...options
		}
		$(pEl).text(obj.textos[atual]);

		interval = setInterval(function () {
			$(pEl).fadeOut(function () {


				if (atual > obj.textos.length) {
					atual = 0;
				}


				$(pEl).text(obj.textos[atual]).fadeIn();

				atual = atual + 1

			});
		}, obj.time);

		return this
	}


	function hide() {
		loaderEL.dataset.active = "false"
		clearInterval(interval)
		pEl.innerText = ""

		return this
	}

	return {
		show,
		hide
	}
}