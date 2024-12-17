export default function breadcrumb() {
	const attr = "[js-breadcrumb]"
	const breadcrumb = document.querySelector(`.breadcrumb${attr}`)
	const objStr = breadcrumb?.dataset.obj

	console.log(objStr)

	if (!breadcrumb || !objStr) return

	const obj = JSON.parse(objStr.replaceAll(`'`, `"`))
	const aLength = obj.length - 1

	const items = obj.map(({ name, slug, link }, index) => `
		<li class="${index === aLength ? "active" : ""}">
			<a ${link ? `href="${link}"` : ""} data-slug="${slug}">${name}</a>
		</li>
		`)



	const template = () => {
		return `
			<ul class="flex flex-wrap breadcrumb-wrapper">
				<li>
					<a href="/">
							Home
					</a>
				</li>
				${items.join("")}
			</ul>
		`
	}

	breadcrumb.innerHTML = template()

	if (GLOBAL.isMobile) {
		const breadMobile = document.querySelector(".breadcrumb-mobile")
		breadMobile.appendChild(breadcrumb)
	}
}