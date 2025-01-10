export default function showCorrectSection() {
	const attr = document.querySelector("[data-secao]")
	if (!attr) return

	const secao = GLOBAL.url.searchParams.get('secao')
	const wrapperSecao = document.querySelector(`[data-secao='${secao}']`)
	wrapperSecao && wrapperSecao.classList.remove('hidden')
}