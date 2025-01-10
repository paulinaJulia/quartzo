import accordion from './modules/accordion'
import breadcrumb from './modules/breadcrumb'
import dataTablesInit from './modules/dataTablesInit'
import dropdown from './modules/dropdown'
import inlineFunctions from './modules/inlineFunctions'
import inputToogleActive from './modules/inputToogleActive'
import multiLevelMenu from './modules/multiLevelMenu'
import showCorrectSection from './modules/showCorrectSection'
import showToast from './modules/showToast'
import startAllChoices from './modules/startAllChoices'
import tabs from './modules/tabs'
import mostraSenha from './modules/mostraSenha'


import tableSelecionarColunas from './modules/tableSelecionarColunas.js'
import tableBasicOrdenation from "./modules/tableBasicOrdenation.js"
import addFilterURLAndReload from './modules/addFilterURLAndReload.js'
import tableBasicSearch from "./modules/tableBasicSearch.js"
import tableBasicQnt from "./modules/tableBasicQnt.js"
import tableBasicRecentes from "./modules/tableBasicRecentes.js"
import initNotification from './modules/notification_bar'
import mudaValoresDeAcordoComFormula from "./modules/mudaValoresDeAcordoComFormula.js"
import loader from './modules/loader'
import formTitleChange from './modules/formTitleChange'
import initialAnimations from './modules/animation'

accordion()
breadcrumb()
dataTablesInit()
dropdown()
inlineFunctions() // Faz as implementações relacionadas aos inlines
inputToogleActive() // muda class ativa nos inputs
multiLevelMenu()
initNotification()
showCorrectSection() //mostra elemento de acordo com parametro na url
showToast()
startAllChoices() //inicia bibiloteca Choices.js
tabs()
mostraSenha()
addFilterURLAndReload() //adiona um filtro na url e recarrega
//table
tableSelecionarColunas() //show hide coluns
tableBasicOrdenation()  // ordenacao ao clicar na thead
tableBasicSearch() //Busca da tabela basica
tableBasicQnt() //quantidade de items vcisiveis na tabela
tableBasicRecentes() //ordena por id maior ou menor
formTitleChange()
initialAnimations()

const menuObject = multiLevelMenu(subMenuItens)
if (menuObject) {
	const menu = menuObject.init()
	window.menu = menu
}
window.initAccordion = accordion;
window.mudaValoresDeAcordoComFormula = mudaValoresDeAcordoComFormula;
window.myLoader = loader;




document.addEventListener("DOMContentLoaded", () => {
	document.body.classList.add("DOMContentLoaded")
})