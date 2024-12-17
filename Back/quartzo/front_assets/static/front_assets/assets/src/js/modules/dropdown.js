
import outSideClick from "./outsideCLick"

export default function dropdown() {
	const dropdownMenus = document.querySelectorAll('[js-dropdown]');

	dropdownMenus.forEach(menu => {
		['touchstart', 'click',].forEach(userEvent => {
			menu.addEventListener(userEvent, handleClick);

		});

	});

	function handleClick(event) {
		// event.preventDefault(); //retirar se tiver click no item
		dropdownMenus.forEach(i => i.classList.remove("active"))
		this.classList.add('active');

		// outside click pode ser reaproveitado para outros eventos de bubble
		outSideClick(this, ['touchstart', 'click', "mouseleave"], () => { //ativa o outside click com os eventos 
			this.classList.remove("active")
		})
	}

}