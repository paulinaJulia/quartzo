export default function tableBasicRecentes() {
	const attr = "js-table-recentes"
	const els = document.querySelectorAll(`[${attr}]`)
	const url = new URL(window.location)
	let filtersOBJ = GLOBAL.splitFilters(url.search)

	if (!els.length) return

	els.forEach(i => {
		i.addEventListener("change", search(i))

		if (!filtersOBJ) return
		if (filtersOBJ["order"]) {
			const select = GLOBAL.getChoicesActive(i.id, listOfChoices)
			select.setChoiceByValue(filtersOBJ["order"])
		}

	})

	function search(input) {
		return (e) => {
			const url = new URL(window.location)
			let filtersOBJ = GLOBAL.splitFilters(url.search)

			const target = e.currentTarget

			if (filtersOBJ) {
				filtersOBJ["order"] = target.value

			} else {
				filtersOBJ = {}
				filtersOBJ["order"] = target.value
			}

			const newFilters = GLOBAL.generateStringFilterFromObject(filtersOBJ)
			window.location.href = `${url.origin}${url.pathname}${newFilters}`



		}
	}



}

