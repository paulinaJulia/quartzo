export default function outSideClick(element, events, callback) {

	const outside = "data-outside"
	const html = document.documentElement

	if (!element.hasAttribute(outside)) { //verifica se tem o atributo

		events.forEach(userEvent => {
			html.addEventListener(userEvent, handleOutsideClick) //adiciona evento de click que vai aproveitar do bubble
		})

		element.setAttribute(outside, "") //coloca atributo para nao adicionar o evento mais de uma vez
	}


	function handleOutsideClick(event) {

		if (!element.contains(event.target)) {

			element.removeAttribute(outside, "")

			events.forEach(userEvent => {
				html.removeEventListener(userEvent, handleOutsideClick) //adiciona evento de click que vai aproveitar do bubble
			})
			callback()


		}

	}
	
}