// Selecionar o parágrafo com a classe "paragrafo-especial"
var primeiroparagrafo= document.querySelector(".primeiro-paragrafo");

// Selecionar o parágrafo com a classe "primeiro-paragrafo"
var primeiroParagrafo = document.querySelector(".primeiro-paragrafo");

// Adicionar ouvinte de eventos ao parágrafo "primeiro-paragrafo"
primeiroParagrafo.addEventListener("click", function() {
    atualizarNome(primeiroParagrafo);
});

function atualizarNome(paragrafo){
  var nome = prompt("Qual seu nome");  
  paragrafo.textContent = "Jogador 1: " + nome;
}
//---------------------------------------------------------------------------------- Segundo paragrafo.

// Selecionar o primeiro parágrafo
var segundoParagrafo = document.querySelector(".segundo-paragrafo");

// Selecionar o segundo paragrafo
var segundoParagrafo = document.querySelector(".segundo-paragrafo");

// Adicionar ouvinte de eventos ao parágrafo ".segundo-paragrafo";
segundoParagrafo.addEventListener("click", function() {
  atualizarregiao(segundoParagrafo);
});

function atualizarregiao(paragrafo) {
  var regiao = prompt("Insira seu estado");
  paragrafo.textContent = "Regiao: " + regiao;
}