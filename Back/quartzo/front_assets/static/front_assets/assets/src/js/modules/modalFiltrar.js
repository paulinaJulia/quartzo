export default function modalFiltrar(wrapperBadge, wrapperFields) {
	const attr = document.querySelector("[js-modal-filtrar]")

	if(!attr) return

	const token = 'csrfmiddlewaretoken'
	//variavel para evitar que a ordenação da tabela entre nos filtros
	const filterOrder = 'order'
	const ativos = "<p class='flex text-sm gap-8 font-semibold text-neutral-80'><svg class='w-20 h-20 text-primary-pure'><use xlink:href='#icon_filtrar'></use></svg>Filtros Ativos</p>"
	const btnLimpar = document.querySelector('[js-limpar-filtro]')
	
	const geraBadge = (item) => `<div class="badge">${item}</div>`


	function filtrosAtivos(wrapper) {
	

		const url = new URL(window.location)
		// const urlSearchParams = new URLSearchParams(url);
		// const params = Object.fromEntries(urlSearchParams.entries());
		// const array = Object.entries(params);	
		// console.log(params)
		let filtersOBJ = GLOBAL.splitFilters(url.search)
		console.log(url.search)
		console.log('obj', filtersOBJ)
		if (!filtersOBJ) return
		btnLimpar?.classList.remove("hidden")

		const filterArray = Object.entries(filtersOBJ)

		const template = filterArray
			.filter(([key, value]) => value && key != token && key != filterOrder)
			.map(([key, value]) => geraBadge(key.replaceAll('_', ' ')))
		
		const badges = `${ativos}<div class="flex gap-8 md2:flex-wrap">${template.join(" ")}</div>`

		wrapper.innerHTML = badges

		setValueOnFields(wrapper, filtersOBJ)
	}


	
	function setValueOnFields(wrapper, obj) {
		const objArr = Object.entries(obj)

		objArr.forEach(([key, value]) => {

			const field = wrapperFields.querySelector(`[name="${key}"]`)
			if(!field) return

			const type = field.tagName
			
			if (type === "SELECT") {
				const select = GLOBAL.getChoicesActive(field.id, listOfChoices)
				select.setChoiceByValue(value)
			}
			if (type === "INPUT") {
				// const str = "ç_--áäàãa@! teste}{\ ";
				field.value = decodeURIComponent(value.replaceAll(/\+/g, ' '))
			}

		})
		
	}


	function limparFiltros() {
		const url = new URL(window.location)
		console.log(url.pathname)
		
		window.location.href = `${url.origin}${url.pathname}`
	}

	

	function init() {
		document.addEventListener("DOMContentLoaded", () => filtrosAtivos(wrapperBadge))
		btnLimpar.addEventListener("click", limparFiltros)
	
	}

	return {
		init
	}

}