export default function addFilterURLAndReload() {
	const attr = "js-add-filter"
	const els = document.querySelectorAll(`[${attr}]`)

	if (!els.length) return

	els.forEach(i => i.addEventListener("click", handleCallback))

	function handleCallback(e) {
		e.preventDefault()
		const target = e.currentTarget
		const filtro = target.getAttribute("js-add-filter")?.split(",")
		const [param, value] = filtro
		const valueClean = value?.trim()

		const url = new URL(window.location)
		let filtersOBJ = GLOBAL.splitFilters(url.search)


		// const haveSameFilter = filtersOBJ ? filtersOBJ[param] : false


		
		if (filtersOBJ) {
			if (param === "order" && filtersOBJ.order?.replace("-", "") === valueClean) {

				console.log(target.classList.contains("up"));

				if (target.classList.contains("up")) {
					filtersOBJ[param] = `-${valueClean}`
				} else {

					filtersOBJ[param] = valueClean
				}

			} else {
				filtersOBJ[param] = valueClean

			}


		} else {
			filtersOBJ = {}
			filtersOBJ[param] = value
		}

		const newFilters = GLOBAL.generateStringFilterFromObject(filtersOBJ)

		window.location.href = `${url.origin}${url.pathname}${newFilters}`


	}


}