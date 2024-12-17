export default function startAllChoices() {
	const allSelects = [...document.querySelectorAll("select[js-choices]")]
		?.filter(select => !select.hasAttribute('js-no-choices'))

	if (!allSelects) return

	const listOfChoices = [...allSelects].map(i => {
		const hasAttr = i.getAttribute('js-choices-props')
		const props = hasAttr ? JSON.parse(hasAttr) : {}
		const choicesObj = i.getAttribute('js-choices-obj')
		

		const opts = {
			searchEnabled: false,
			searchChoices: false,
			itemSelectText: 'Selecionar',
			noResultsText: 'Nada Encontrado...',
			// choices: choicesObj
			...props
		}

		const source = { choices: window[choicesObj] }
		const returnedTarget = choicesObj ? {...opts, ...source } : opts

		return GLOBAL.initChoices(i, returnedTarget)


	})

	window.listOfChoices = listOfChoices

}