export default function tableSelecionarColunas() {
	const attr = "[js-selecionar-colunas]"
	const els = document.querySelectorAll(attr)
	if (!els.length) return


	const url = new URL(window.location)
	let filtersOBJ = GLOBAL.splitFilters(url.search)
	let colunasOcultas
	let colunasInicialmenteOcultas

	const showHideColun = (el, drop) => (e) => {
		const value = el.value
		const table = document.querySelector('table')
		const tableColuns = table.querySelectorAll(`[data-reference='${value}']`)


		if (e.currentTarget.checked === false) {
			tableColuns.forEach(i => i.classList.add("hidden"))
		} else {
			tableColuns.forEach(i => i.classList.remove("hidden"))

		}

		colunasOcultas = [...drop.querySelectorAll("input")].filter(i => !i.checked).map(i => i.value).join()

		if (filtersOBJ) {
			filtersOBJ["colunas_ocultas"] = colunasOcultas

		} else {
			filtersOBJ = {}
			filtersOBJ["colunas_ocultas"] = colunasOcultas
		}

		const newFilters = GLOBAL.generateStringFilterFromObject(filtersOBJ)
		history.pushState(null, null, `${url.origin}${url.pathname}${newFilters}`)

	}

	if (filtersOBJ) {
		if (filtersOBJ["colunas_ocultas"]) {
			colunasInicialmenteOcultas = filtersOBJ["colunas_ocultas"].split(",")

		}

	}

	els.forEach(drop => {
		const inputs = drop.querySelectorAll("input")
		inputs.forEach(input => input.addEventListener("change", showHideColun(input, drop)))

		if (colunasInicialmenteOcultas) {
			const els = [...drop.querySelectorAll(colunasInicialmenteOcultas.map(i => `input[value=${i}]`).join(","))]
			els?.forEach(i => {
				i.checked = false
				i.dispatchEvent(new Event("change"))
			})

		}


	})




}