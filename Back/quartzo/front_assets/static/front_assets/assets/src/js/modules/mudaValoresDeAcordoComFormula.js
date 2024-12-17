export default function mudaValoresDeAcordoComFormula(form, formulas) {

  function mudavalores(formulas) {
//pego cada objeto de formula
    const relacaoFormulas = Object.values(formulas).map((value) => value)
    //jogo no elemento o resultado da formula
    relacaoFormulas.map(i => i.el.innerHTML = i.formula())


  }

  //rodo inicialmente pra mudar o valor
  mudavalores(formulas);

  //adiciono o change pra rodar a mudanca de valores
  form.addEventListener("change", () => mudavalores(formulas));
}
