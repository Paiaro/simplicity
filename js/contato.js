'use strict';
// selecionar os elementos que serão manipulados

const formulario = document.querySelector("form");
const campoCep = formulario.querySelector("#cep");
const campoEndereco = formulario.querySelector("#endereco");
const campoBairro = formulario.querySelector("#bairro");
const campoCidade = formulario.querySelector("#cidade");
const campoEstado = formulario.querySelector("#estado");
const botaoBuscar = formulario.querySelector("#buscar");
const mensagem = formulario.querySelector("#status");

// detectando quando o botão de buscar CEP é acionado

botaoBuscar.addEventListener("click",function(event){
// preventDefault anula o comportamento de redicionamento/recarregamento da pagina. Sempre acontece ao trabalhar com <a> e <form>.
event.preventDefault();

});