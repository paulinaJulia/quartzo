

export default function inlineFunctions() {
	const hasInlines = document.querySelector("[data-js-inline]")
	if (!hasInlines) return

	function addRemoveEventInExistingInlines() {
		const btnsRemoveInline = document.querySelectorAll("[class*='remove_inline']")
		btnsRemoveInline.forEach(btn => {
			const inline = btn.closest('.inline-item')
			btn.addEventListener('click', () => removeInline(inline))
		})
	}

	function checkMaxNumAllForms() {
		const maxNumbersElements = document.querySelectorAll("[id$='-MAX_NUM_FORMS']")
		maxNumbersElements.forEach(numberElement => {
			const wrapperInline = numberElement.closest('.wrapper-inline')
			checkMaxNumForm(numberElement.value, wrapperInline)
		})
	}

	function checkMaxNumForm(totalForms, wrapperInline) {
		const inlineItens = wrapperInline.querySelectorAll('.inline-item')
		if (inlineItens.length === Number(totalForms)) {
			const dataJsInline = wrapperInline.dataset.jsInline
			const btnAddInline = document.querySelector(`.add_inline[data-js-inline='${dataJsInline}']`)
			btnAddInline.classList.add('hidden')
		}
	}

	function addAddEventInExistingInlines() {
		const btnsAddInline = document.querySelectorAll('.add_inline')
		btnsAddInline && btnsAddInline.forEach(btnAddInline => {
			//o id já vir acrescentado do outro
			btnAddInline.addEventListener('click', () => addInline(btnAddInline.dataset.jsInline))
		})
	}

	function addInline(dataJsInline) {
		const wrapperInline = document.querySelector(`.wrapper-inline[data-js-inline='${dataJsInline}']`)
		const inputMaxForms = wrapperInline.querySelector("[id$='-MAX_NUM_FORMS']")
		const inputFormIndex = wrapperInline.querySelector("[id$='-TOTAL_FORMS']")
		const intFormIndex = parseInt(inputFormIndex.value)
		const emptyForm = $(`.empty_inline_form[data-js-inline='${dataJsInline}']`)

		$(wrapperInline).append(emptyForm.html().replace(/__prefix__/g, intFormIndex))

		const removeBtn = wrapperInline.querySelector(`.remove_inline-${intFormIndex}`)
		const inline = document.querySelector(`.inline-${intFormIndex}[data-js-inline=${dataJsInline}]`)
		removeBtn.addEventListener('click', () => removeInline(inline))

		inputFormIndex.value = intFormIndex + 1

		extraConfigs(inline, intFormIndex)
		checkMaxNumForm(inputMaxForms.value, wrapperInline)
	}

	function removeInline(inline) {
		const wrapperInline = inline.closest(".wrapper-inline")
		const inputMaxForms = wrapperInline.querySelector("[id$='-MAX_NUM_FORMS']")
		const deleteBtn = inline.querySelector(`[id$='-DELETE'`)
		deleteBtn.setAttribute('checked', true)
		inline.classList.add('hidden')



		checkMaxNumForm(inputMaxForms.value, wrapperInline)
	}

	function extraConfigs(inline, id) {
		initInlineAccordion(inline, id)
		initChoices(inline)
	}

	function initChoices(inline) {
		const selects = [...inline.querySelectorAll('select')]
		const props = {
			searchEnabled: false,
			searchChoices: false,
		}
		const outrosChoices = selects.map(select => GLOBAL.initChoices(select, props))
		window.listOfChoices = [...listOfChoices,...outrosChoices]
	}

	// let count = 1000;

	function initInlineAccordion(inline, id) {
		const accordionsItem = inline.querySelectorAll('.accordion[js-accordion-container]');
		const inlineAccordions = inline.querySelectorAll('[data-accordion]')
		const accordionsTitle = inline.querySelectorAll(".accordion-title .texto");
		accordionsTitle.forEach(i => i.innerText = `Item n°${id}`)
		inlineAccordions?.forEach(i => i.setAttribute('data-accordion', id));
		// window.initAccordion(accordionsItem, id);
	}

	(function init() {
		addAddEventInExistingInlines()
		addRemoveEventInExistingInlines()
		checkMaxNumAllForms()


	})()
}