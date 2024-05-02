'use strict';
// selecionar os elementos que serão manipulados

const formulario = document.querySelector("form");
const campoCep = formulario.querySelector("#cep");
const campoEndereco = formulario.querySelector("#endereco");
const campoBairro = formulario.querySelector("#bairro");
const campoCidade = formulario.querySelector("#cidade");
const campoEstado = formulario.querySelector("#estado");
const botaoBuscar = formulario.querySelector("#buscar");
const mensagemStatus = formulario.querySelector("#status");
// detectando quando o botão de buscar CEP é acionado

botaoBuscar.addEventListener("click", function (event) {
    // preventDefault anula o comportamento de redicionamento/recarregamento da pagina. Sempre acontece ao trabalhar com <a> e <form>.
    event.preventDefault();
// verificando se o cep nao tem 8 digitos
    if(campoCep.value.length !== 8 ){
// console.log("não tem 8 digitos!");

mensagemStatus.textContent = "Digite um CEP válido!";
mensagemStatus.style.color = "red";
// pare completamente a execução.
return;

}
//Guardar o valor do cep digitado/informado
let cepInformado = campoCep.value;
console.log(cepInformado);
});