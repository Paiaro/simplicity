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

botaoBuscar.addEventListener("click",async function (event) {
    // preventDefault anula o comportamento de redicionamento/recarregamento da pagina. Sempre acontece ao trabalhar com <a> e <form>.
    event.preventDefault();
    // verificando se o cep nao tem 8 digitos
    if (campoCep.value.length !== 8) {
        // console.log("não tem 8 digitos!");

        mensagemStatus.textContent = "Digite um CEP válido!";
        mensagemStatus.style.color = "red";
        // pare completamente a execução.
        return;

    }
    //Guardar o valor do cep digitado/informado
    let cepInformado = campoCep.value;

    // AJAX - Asyncronous JavaScript And XML (JavaScript e XML)
    // Técnica de comunicação (Transmissão, recebimento) de dados que permite o processamento em conjunto com APIs (ou web services)

    //Etapa 1: preparar a URL da API com o CEP informado
    let url = `https://viacep.com.br/ws/${cepInformado}/json/`;

    //Etapa 2: acessao a API (com URL) e aguardar o retorno dela
   const resposta = await fetch(url);

    //Etapa 3: extrair os dados da resposta da API em formato JSON
   const dados = await resposta.json();
   console.log(dados);
    
   //Etapa 4: lidar com os dados (em caso de erro e de sucesso)
// se existir a string "erro" no objeto dados
   if ("erro" in dados) {
    mensagemStatus.textContent = "CEP inexistente!";
    mensagemStatus.style.color = "red";
    
} else {
    mensagemStatus.textContent = "CEP encontrado!";
    mensagemStatus.style.color = "blue";
}



});















