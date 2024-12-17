const GLOBAL = {
	url: new URL(window.location),
	/////////////////////////////////////////

	isMobile: window.matchMedia("(max-width: 767px)").matches,
	isTablet: window.matchMedia("(max-width: 1180px)").matches,

	tableToExcel: (id_table, name_file) => {
		const date = new Date();
		const today = `${date.getFullYear()}_${date.getMonth() + 1}_${date.getDate()}`;

		const table = document.querySelector(`#${id_table}`);
		const wb = XLSX.utils.table_to_book(table, {
			sheet: "Página 1",
		});
		return XLSX.writeFile(wb, `${name_file}__${today}.xlsx`);
	},

	/////////////////////////////////////////

	fetchPOST: async (url, data, token) => {
		data = JSON.stringify(data);

		await fetch(url, {
			method: "POST",
			body: data,
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json",
				"X-CSRFToken": token,
			},
		})
			.then((res) => res.json())
			.then((res) => (resultado = res));
		return resultado;
	},


	/////////////////////////////////////////


	toastDefault: {
		duration: 3000,
		position: "center",
	},

	/////////////////////////////////////////
	showToastify: (message) => {
		Toastify({
			...this.toastDefault,
			text: message,
		}).showToast();
	},

	/////////////////////////////////////////

	getOnlyNumbersOfString: (string) => {
		return string.replace(/\D/g, "");
	},

	/////////////////////////////////////////
	verifyHaveError: ({
		error
	}) => {
		if (error) {
			throw new Error(error);
		}
	},

	/////////////////////////////////////////
	getFields: (inputsSelector) => {
		return Array.from(document.querySelectorAll(inputsSelector)).reduce(
			(acc, element) => {
				if (element.name) {
					if (element.type == "checkbox" || element.type == "radio") {
						acc[element.name] = element.checked;
					} else {
						acc[element.name] = element.value;
					}
				}

				return acc;
			}, {}
		);
	},

	/////////////////////////////////////////
	removeSidebar: () => {
		const sidebar = document.querySelector(".sidebar");
		sidebar.remove();
	},

	/////////////////////////////////////////
	wrap_single: (el, wrapper, classe) => {
		/*
		Exemplo de uso:
		document.querySelectorAll('textarea')
			.forEach(i => wrap_single(i, "div", ["textarea--field"]))
		*/

		const wrap = document.createElement(wrapper);
		classe.forEach((c) => wrap.classList.add(c));
		el.parentNode.insertBefore(wrap, el);
		wrap.appendChild(el);
	},

	/////////////////////////////////////////
	initChoices: (el, opts) => {
		return new Choices(el, {
			silent: true,
			placeholder: true,
			searchResultLimit: 10,
			placeholderValue: 0,
			renderChoiceLimit: -1,
			itemSelectText: "Selecionar",
			noResultsText: "Nada Encontrado...",
			shouldSort: false,
			searchEnabled: true,
			searchChoices: true,
			// searchEnabled: false,
			// searchChoices: false,
			...opts,
		});
	},

	/////////////////////////////////////////
	debounceFunction: (fn, wait = 1000, timing) => {
		return (...args) => {
			// console.log("ENTROU DEBOUNCE");
			clearTimeout(timing)
			timing = setTimeout(() => fn(...args), wait)

		}
	},

	/////////////////////////////////////////subgrupo_pedido


	get: async (url) => {
		try {
			const response = await axios.get(url)
			if (response.statusText !== "OK") throw new Error(`${response.statusText} - ${response.status} `)
			return response
		} catch (e) {
			this.showToastify(e)
			return e
		}
	},


	///////////////////////////////////////


	toggleClassOrdenation: (e) => {
		const target = e.currentTarget
		const btn = target.querySelector("button")
		if (btn.classList.contains("gridjs-sort-desc")) {
			target.classList.remove("gridjs-sort-asc")
			target.classList.add("gridjs-sort-desc")
		}
		if (btn.classList.contains("gridjs-sort-asc")) {
			target.classList.remove("gridjs-sort-desc")
			target.classList.add("gridjs-sort-asc")
		}

	},

	/////////////////////////////////////////

	setSelectedOptionInChoices: (choice, value) => {

		function pegaResponsavel(choice) {
			if (choice.value == value) {
				choice.selected = true
			} else {
				choice.selected = false
			}
			return choice

		}
		const arrayOptionSelected = choice._currentState.choices.map(pegaResponsavel)
		choice.setChoices(
			[...arrayOptionSelected],
			'value',
			'label',
			true,
		);

	},

	getChoicesActive: (selectID, choicesList) => {
		const list = choicesList.filter((i) => i._baseId.replace("choices--", "") == selectID ? i : false)

		return list.length > 0 ? list.reduce((acc, item) => (acc = item)) : null

	},

	translatefilepond: {
		labelIdle: 'Arraste e solte o arquivo <br>ou <span class="filepond--label-action">selecione um arquivo</span>',
		labelInvalidField: 'O Tipo de arquivo é invalido',
		labelButtonRemoveItem: 'Remover',
		labelButtonAbortItemLoad: 'Abortar',
		labelButtonAbortItemLoad: 'Tente Novamente',
		labelButtonAbortItemProcessing: "Cancelar",
		labelButtonUndoItemProcessing: "Desfazer",
		labelButtonRetryItemProcessing: "Tente Novamente",
		labelButtonProcessItem: 'Processar',
		labelTapToCancel: 'Cancelar',
	},



	addAlpha: (color, opacity) => {
		// coerce values so ti is between 0 and 1.
		const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
		return color + _opacity.toString(16).toUpperCase();
	},


	/////////////////////////////////////////


	checkIsObject: (obj) => typeof obj === 'object' && obj !== null,

	/////////////////////////////////////////


	getStringFilterFromForm(form) {
		const fields = [...form.querySelectorAll(`select, inputs`)]
		const fieldsValues = fields.map(({ name, value }) => ({ name: name, value: value }))

		const fieldsString = fieldsValues.reduce((acc, i) => {
			acc = acc + `&${i.name}=${i.value}`
			return acc

		}, "")

		return fieldsString

	},

	/////////////////////////////////////////

	functionComposition: (...fns) => {
		return function (valor) {
			return fns.reduce((acc, fn) => fn(acc), valor)
		}
	},




	splitFilters(filtros) {
		if (!filtros) return
		const splitFiltros = filtros.replace("?", "").split("&")
		const filtrosObj = {}
		splitFiltros.forEach(filtro => {
			const splitFiltro = filtro.split("=")
			filtrosObj[splitFiltro[0]] = splitFiltro[1]
		})
		return filtrosObj
	},


	generateStringFilterFromObject(obj) {
		const filtros = Object.entries(obj).map(([key, value]) => `&${key.trim()}=${value.trim()}`)
		return `?x=${filtros.join("")}`

	},


	//////////////////////////////////////////

	//!!!TraversingInlines
	// tipo: {
	// 	key: 'tipo_ativo',
	// 	field: '.input_tipo_ativo',
	// },
	traversingMaquinario({ section, objForm, templateHTML }) {

		// recebe um objeto de configurações
		if (!section) return
		//insere o template html dos wrappers
		section.insertAdjacentHTML('afterbegin', templateHTML)
		// console.log(section, templateHTML)
		// retorna um array com um objeto relacionando label,field,wrapper
		const arrayForm = Object
			.entries(objForm)// [ ['tipo'], [{}] ]
			.map(([key, value]) => {
				let objeto = {}
				objeto[key] = {
					label: section.querySelector(`label[for$='${value.key}']`),
					field: section.querySelector(`[id$='${value.key}']`),
					wrapper: section.querySelector(value.field)
				}

				return objeto;
			});

		//otimiza o array pra poder acessar de acordo com a key
		const objFields = arrayForm.reduce((acc, i) => {
			acc = Object.assign(acc, i)
			return acc;
		}, {})

		// fazendo um loop no objeto e inserindo os elementos no html
		Object
			.entries(objFields)
			.map(([_, value]) => {
				const { field, label, wrapper } = value;
				wrapper.append(label, field);
			})

		//adicionando as classes do tema


		const inputs = section?.querySelectorAll('.input-box input')
		const labels = section?.querySelectorAll('.input-box labels')
		inputs.forEach(inpt => inpt.classList.add("input-text", "h-48", "w-full"));
		labels.forEach(label => label.classList.add("label", "block", "text-neutral-50"));
	},


	toggleClassOnButtonClick(el, className) {
		const elemento = document.querySelector(el);
		elemento.classList.toggle(className);

	},

	formatReal: (v, style = 'currency') => new Intl.NumberFormat('pt-BR', { style: style, currency: 'BRL' }).format(v),


	FormatREAL: (v) => {
		if (!v) return
		const value = v.split(".")
		const [_, cents] = value
		const money = Number(v).toLocaleString("pt-br", { minimumFractionDigits: 2 })
		return `${money}`

	},

	FormatREALBackEnd: (v) => {
		const value = v.includes(",") ? v.split(",") : [v.slice(0, -3), v.slice(-2)]
		// console.log(value)
		const [money, cents] = value
		return `${money.replaceAll(".", "")}.${cents}`
	},

	realToNumber: (v) => {
		const centavos = `${v}`.startsWith("0.")
		const value = parseFloat(`${v}`.replace(/\./g, '').replace(',', '.'))
		return centavos ? Number(`0.${value}`) : value
	},

	scrollTopBar: (el) => {
		window.addEventListener("scroll", function () {
			const element = this.document.querySelector(el)
			element && element.classList.toggle("scrollou", window.scrollY > 100);
		});
	}
}
