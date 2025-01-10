export default function tableBasicQnt() {
	const attr = "js-table-qnt"
	const els = document.querySelectorAll(`[${attr}]`)
	const url = new URL(window.location)
	let filtersOBJ = GLOBAL.splitFilters(url.search)

	if (!els.length) return

	els.forEach(i => {
		i.addEventListener("change", search(i))

		if (!filtersOBJ) return

		if (filtersOBJ["paginate_by"]) {
			const select = GLOBAL.getChoicesActive(i.id, listOfChoices)

			select.setChoiceByValue(filtersOBJ["paginate_by"])
		}

	})

	function search(input) {
		return (e) => {
			const target = e.currentTarget
			const url = new URL(window.location)
			let filtersOBJ = GLOBAL.splitFilters(url.search)

			if (filtersOBJ) {
				filtersOBJ["paginate_by"] = target.value

			} else {
				filtersOBJ = {}
				filtersOBJ["paginate_by"] = target.value
			}

			const newFilters = GLOBAL.generateStringFilterFromObject(filtersOBJ)
			window.location.href = `${url.origin}${url.pathname}${newFilters}`


		}
	}



}

