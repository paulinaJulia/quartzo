
export default function multiLevelMenu(obj) {
	let state = { open: false, delay: 150 }
	const { isTablet, debounceFunction } = GLOBAL

	const sidebar = document.querySelector(".sidebar");
	if (!sidebar) return false;
	const sideBarOptions = document.querySelector('.opcoes-container');
	const body = document.body

	const svgAdicionar = `<svg><use xlink:href="#icon_add"></use></svg>`
	const svgList = `<svg><use xlink:href="#icon_list"></use></svg>`
	const svgArrow = `<svg class="icon group-hover:opacity-100 icon-arrow"><use xlink:href="#icon_arrow_left"></use></svg>`
	const iconBack = `<svg class="icon-back group-hover:opacity-100 icon-arrow h-32 w-32"><use xlink:href="#icon_back_arrow"></use></svg>`

	const tipyAdicionar = 'data-tippy-content="Adicionar"'
	const tipyList = 'data-tippy-content="Lista"'

	const fundo = document.querySelector(".nav-fundo ")
	const itensLV0 = sidebar.querySelectorAll("[js-menu-lista] > li[js-lista-name] ")
	const toogle = document.querySelector("[js-menu-toggle]")

	// Titulo
	const templateModuleName = (name, icon) =>
		`<li class='module-name'>${icon && !isTablet ? icon.outerHTML : ''} ${isTablet ? iconBack : ''}  ${name}<li>`

	// Me de o menu pertencente
	const getStaticMenu = ((slug) => {
		return document.querySelector(`[js-menu-lista] [js-lista-name='${slug}']`)


	})


	// Popula os leveis do menu
	const populateMenuLevel = (itemMenu, submenu, name, svg) => {

		const templateSubMenu = templateLevelMenu(submenu)
		const templateItems = submenu.items.map(templateItensSubmenu)
		templateSubMenu.innerHTML = templateItems.join("")
		templateSubMenu.insertAdjacentHTML('afterbegin', templateModuleName(name, svg))
		itemMenu.appendChild(templateSubMenu)
		itemMenu.classList.add("have-submenu")
	}

	// Template das liZ	
	const templateItensSubmenu = (item) => {
		const { name, link, list, adicionar, slug, submenu } = item
		// console.log(item)
		return `
				<li class="group" js-lista-name='${slug}' ${submenu ? `data-submenu` : ''}>
					<div class="item-wrapper">
						<a ${link ? `href="${link}"` : ""} class='item'> ${name}	</a>
						${adicionar ? `<a ${tipyAdicionar} class='adicionar' href="${adicionar}">${svgAdicionar}</a>` : ""}
						${list ? `<a ${tipyList} class='lista' href="${list}">${svgList}</a>` : ""}
						${submenu ? svgArrow : ""}
					</div>
				</li>`
	}

	// Template dos sublevel
	const templateLevelMenu = (submenu) => {
		const div = document.createElement("ul")
		div.setAttribute("data-level", submenu.level)
		div.classList.add("submenu")
		return div

	}

	//Cria subMenus
	const createSubMenus = ({ slug, submenu, name }) => {
		// console.log(slug)
		const itemMenu1 = getStaticMenu(slug)
		const svg = itemMenu1.querySelector('svg').cloneNode(true)
		svg.style.setProperty('--cor-1', 'white');

		if (!submenu) return
		populateMenuLevel(itemMenu1, submenu, name, svg)

		submenu.items.forEach(({ slug, submenu, name }) => {
			const itemMenu2 = getStaticMenu(slug)

			if (!submenu) return
			populateMenuLevel(itemMenu2, submenu, name)

			submenu.items.forEach(({ slug, submenu, name }) => {
				const itemMenu3 = getStaticMenu(slug)

				if (!submenu) return
				populateMenuLevel(itemMenu3, submenu, name)

			})

		})


	}



	const handleClickFundo = () => {
		itensLV0.forEach(i => i.classList.remove("active"))
		body.classList.remove("menu-ativo")

		toogleMenu()

	}

	const handleClickItem = (i) => (e) => { // click item nv0
		//e.preventDefault()
		setTimeout(() => sidebar.classList.add("animou"), 200) //add classe para animar apenas uma vez
		body.classList.add("menu-ativo") //add classe para mostrar o fundo do menu
		itensLV0.forEach(i => i.classList.remove("active")) //remove ativo tds outros
		body.classList.remove("dont-open-submenu") // remove a classe que impede que o submenu seja aberto
		i.classList.toggle("active")
	}

	const toogleMenu = () => { //calback hover menu



		//funcao do jquery que me da mais certeza c o menu esta aberto ou n
		if (!isTablet) {
			if (body.classList.contains("menu-ativo")) return
			state.open = !$(sidebar).is(":hover")

		}
		// console.log(state.open);
		if (state.open) {
			body.classList.add("menu-closed")
			body.classList.add("dont-open-submenu")
			sidebar.classList.remove("animou")
			sideBarOptions.classList.remove('ativar')

			if (isTablet) {
				state.open = false
				body.classList.remove("menu-ativo")

			}
		}

		else {
			body.classList.remove("menu-closed")
			body.classList.remove("menu-ativo")



			if (isTablet) {
				state.open = true

			}
		}

	}

	// const showLevelActive = (e) => {
	// 	const level = Number(e.target.closest(".have-submenu")?.querySelector(".submenu").dataset.level) + 1
	// 	console.log(level);
	// 	if (level === 3) sidebar.setAttribute("data-radius", "3")
	// 	if (level === 2) sidebar.setAttribute("data-radius", "2")
	// 	if (level === 1) sidebar.setAttribute("data-radius", "1")
	// }

	const backLevel = (e) => {
		setTimeout(() => itensLV0.forEach(i => i.classList.remove("active")), 100)
	}

	const events = () => {
		itensLV0.forEach(i => i.addEventListener("click", handleClickItem(i)))

		if (isTablet) {
			toogle?.addEventListener('click', toogleMenu)
			document.querySelectorAll(".icon-back")
				.forEach(i => i.addEventListener('click', backLevel))

		}

		else {
			sidebar.addEventListener("mouseenter", debounceFunction(toogleMenu, state.delay))
			sidebar.addEventListener("mouseout", toogleMenu)
			fundo.addEventListener("click", handleClickFundo)
		}

		// sidebar.addEventListener("mousemove", showLevelActive)

	}

	function init() {
		obj.forEach(createSubMenus)
		events()



		return this
	}



	return {
		init,
		toogleMenu
	}

}