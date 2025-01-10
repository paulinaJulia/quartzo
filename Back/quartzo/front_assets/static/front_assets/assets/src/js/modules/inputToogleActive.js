
export default function inputToogleActive() {
	//seta em todos esses tipos de input a classe active
	// se tiver length

	const attr = "[js-ativo]"

	const type = `
	input[type='text']${attr}, 
	input[type='number']${attr}, 
	input[type='email']${attr},
	textarea${attr}
	`
	const inputs = document.querySelectorAll(type)
	// console.log('inputs', inputs)

	inputs?.forEach(input => input.addEventListener('change', (event) => {
		const input = event.currentTarget
		input.value.length !== 0
			? input.classList.add('active')
			: input.classList.remove('active')

	}))


}