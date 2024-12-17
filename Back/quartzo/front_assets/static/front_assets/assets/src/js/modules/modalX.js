function ModalX(el, opts) {
	//classes
	const classOpen = `modal--open`
	const classMain = 'modal--content'
	const classActive = "active"
	const ElNotPoint = el.replace(".", "")
	const deep = document.createElement('div')

	const options = {
		...opts
		// deep: true,
		// zIndex: 300000,
		// zIndexDeep:900
		// closeOnSwipe: true,
		// observer: true,
		// bgMOdal : white
	}

	//els
	const body = document.body
	const elModal = document.querySelector(el);
	const items = elModal.querySelectorAll(`.${classMain}`)

	const state = { //STATE
		open: false,
		id_active: ""
	}

	const changeIDActive = (id) => {
		state.id_active = id

	}

	function createElementAndAppend(el, src, type = "text/javascript",) {  // UTILITY
		const script = document.createElement(el)
		script.type = type
		script.src = src
		document.body.appendChild(script)
	}


	function createDeep() { // FUNDO
		if (options.deep) {
			document.body.appendChild(deep)
			deep.classList.add(`${ElNotPoint}--deep`)
			deep.addEventListener('click', closeModal)
			return this
		}

	}


	function openModal(item, classX, tabName) { //OPEN
		const elemento = typeof item === "object"
		const id = elemento ? item.dataset.id : item
		changeIDActive(id)
		// console.log(`.modal--content[data-id="${state.id_active}"]`);
		const actualSectionActive = elModal.querySelector(`.modal--content[data-id="${state.id_active}"]`)

		elModal.classList.add(classActive)
		deep.classList.add(classActive)
		body.classList.add(`${classOpen}-${ElNotPoint}`)

		items && items.forEach(i => i.classList.remove(classActive))
		actualSectionActive && actualSectionActive.classList.add(classActive)
		elModal.dataset.active = state.id_active
		state.open = true


		classX ? addClassOnModal(true, classX) : ""

		if (tabName) {
			const tabLink = document.querySelector(`[href="${tabName}"]`)
			tabLink && tabLink.dispatchEvent(new Event("click"))
		}

		return this
	}



	function closeModal() { // CLOSE
		const modalWidth = `${elModal.getBoundingClientRect().width.toFixed(0)}px `
		const modalHeight = `${elModal.getBoundingClientRect().height.toFixed(0)}px `

		elModal.style.minWidth = `${modalWidth} `
		elModal.style.minHeight = `${modalHeight} `
		elModal.style.width = `${modalWidth} `
		elModal.style.height = `${modalHeight} `



		body.classList.remove(`${classOpen}-${ElNotPoint}`)

		items && items.forEach(i => i.classList.remove(classActive))
		elModal.classList.remove(classActive)
		deep.classList.remove(classActive)

		state.id_active = ''
		elModal.dataset.active = state.id_active
		state.open = false

		addClassOnModal(false)
		changeIDActive("")
		setTimeout(() => {
			elModal.style.removeProperty("min-width")
			elModal.style.removeProperty("width")
			elModal.style.removeProperty("min-height")
			elModal.style.removeProperty("height")
		}, 300)


		const pic = document.querySelectorAll("picture.active")
		pic && pic.forEach(i => i.classList.remove("active"))

		return this
	}


	function toggleModal(target, classX) { // TOGGLE
		state.open ? closeModal() : openModal(target)
		return this
	}
                                                       
	function addClassOnModal(verification, classX) {
		verification 
		? elModal.setAttribute('data-classX', classX) 
		: elModal.removeAttribute('data-classX')
	}

	function dataOpenEClose() { //DATA-ATRIBUTE
		const dataOpen = document.querySelectorAll(`[data-xopen="${ElNotPoint}"]`)
		const dataClose = document.querySelectorAll(`[data-xclose="${ElNotPoint}"]`)
		const dataToggle = document.querySelectorAll(`[data-xtoggle="${ElNotPoint}"]`)

		dataOpen.forEach(i => i.addEventListener('click', (ev) => {
			openModal(i)
			const target = ev.currentTarget
			const haveClassAttribute = target.dataset.classx

			if (haveClassAttribute) {
				addClassOnModal(true, haveClassAttribute)
			}
		}))

		dataClose.forEach(i => i.addEventListener('click', () => closeModal()))
		dataToggle.forEach(i => i.addEventListener('click', () => toggleModal(i)))
	}

	async function hammerFeature() { // HAMMER
		if (options.closeOnSwipe) {

			const hammerLink = "https://hammerjs.github.io/dist/hammer.min.js"
			const temHammer = Array.from(document.scripts).filter(e => e.src === hammerLink).length === 1
			if (temHammer) { return }

			// if (Hammer) return
			const lado = () => {
				const l = elModal.dataset.position
				if (l === "bottom")
					return "down"
				else if (l === "top")
					return "up"
				else
					return l
			}


			createElementAndAppend("script", hammerLink)
			await new Promise(resolve => {
				const interval = setInterval(() => {
					if (!window.Hammer) { return }
					else {
						clearInterval(interval)
						resolve()
					}

				}, 50);

			})

			const hammerEl = await new Hammer(elModal)

			hammerEl.on(`swipe${lado()}`, () => closeModal())
		}


	}

	function addStyles() { //STYLES
		options.zIndex ? elModal.style.setProperty('--zindex-modal', options.zIndex) : ""
		options.bgModal ? elModal.style.setProperty('--bg-modal', options.bgModal) : ""
		options.zIndexDeep ? deep.style.setProperty('--zindex-deep', options.zIndexDeep) : ""
		// console.log(options.zIndex)
	}

	function ObserverModal() { // OBSERVER
		if (options.observer) {
			const observer = new MutationObserver(mutations => {
				// console.log(mutations)
				mutations.forEach(mutation => {
					if (mutation.type == "attributes") {
						// if (mutation.target.dataset.active) { }
					}

				})
			})

			observer.observe(elModal, {
				attributes: true,
				// attributeFilter: ['data-active']
			})
		}
	}

	function init() {
		dataOpenEClose()
		createDeep()
		hammerFeature()
		addStyles()
		ObserverModal()
		return this
	}

	return {
		elModal,
		state,
		openModal,
		closeModal,
		toggleModal,
		init
	}


}