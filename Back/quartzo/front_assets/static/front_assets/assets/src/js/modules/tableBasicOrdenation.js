export default function tableBasicOrdenation() {
	const attr = "js-table-ordenation"
	const els = document.querySelectorAll(`table[${attr}]`)
	if (!els.length) return

	const url = GLOBAL.url

	const filtersOBJ = GLOBAL.splitFilters(url.search)

	const order = filtersOBJ?.order

	if (!order) return


	const upOrDown = order?.includes("-") ? "down" : "up"


	console.log("FILTROS ATIVOS", filtersOBJ);

	els.forEach(table => {
		console.log(order);
		const th = table.querySelector(`thead [data-reference='${order.replace("-", "")}']`)
		console.log("th", th);
		th?.classList.add(upOrDown)
	})



}