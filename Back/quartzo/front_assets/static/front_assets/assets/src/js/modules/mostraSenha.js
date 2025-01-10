export default function mostraSenha() {
	
	const attr = "[js-password]"
	const divs = document.querySelectorAll(`.show-password${attr}`);
	
	if(!divs.length) return 

	function handleEvent(div){
        return function (event) {
            let input = div.querySelector("[js-input-password]")
            let item = event.currentTarget
            input.type = input.type == 'text' ? 'password' : 'text';
    
            if (input.type == 'text') {
                item.classList.add("mostra")
    
            } else {
                item.classList.remove("mostra");
    
            }
        }
    }
    divs.forEach(div => {
        const buttonPass = div.querySelector('.password')
        buttonPass.addEventListener('click', handleEvent(div))
    })
    
}

