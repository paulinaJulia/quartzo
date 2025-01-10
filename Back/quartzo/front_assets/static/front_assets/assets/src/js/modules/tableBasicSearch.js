export default function tableBasicSearch() {
	const attr = "js-table-search"
	const els = document.querySelectorAll(`[${attr}]`)
	const url = new URL(window.location)
	let filtersOBJ = GLOBAL.splitFilters(url.search)


	if (!els.length) return


	els.forEach(i => {
		const wrapper = i.closest(".input-container")
		const btn = wrapper.querySelector("button")

		
		btn.addEventListener("click", search(i))
		i.addEventListener("keyup", (e) => {
			
		})


		if (!filtersOBJ) return
		if (filtersOBJ["filter"]) {
			i.value = decodeURIComponent(filtersOBJ["filter"])
		} else {
			return
		}
	})


	function search(input) {
		return (e) => {
			const target = e.currentTarget

			if (filtersOBJ) {
				filtersOBJ["filter"] = input.value

			} else {
				filtersOBJ = {}
				filtersOBJ["filter"] = input.value
			}

			const newFilters = GLOBAL.generateStringFilterFromObject(filtersOBJ)
			window.location.href = `${url.origin}${url.pathname}${newFilters}`



		}
	}

	function clearSearch() {
		const el = document.querySelector('[js-table-clear-search]')
		const urlParams = new URLSearchParams(window.location.search);
		const filterParam = urlParams.get('filter');

		if (!el || !filterParam) { return }

		const newUrl = location.href.replace(`&filter=${filterParam}`, '')
		el.classList.remove('hidden')
		el.setAttribute('href', newUrl)
	}

	clearSearch()
}