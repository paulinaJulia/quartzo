export default function formTitleChange(){
const textToChange = document.querySelector('.card.estilo-form .header-card .titulo p');
const urlString = window.location.href;
if(!textToChange) return
urlString.indexOf("update") != -1 ? textToChange.innerText = 'Editar Cadastro' : '';
}