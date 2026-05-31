var botao = document.getElementById("btn-info");
var resposta = document.getElementById("resposta");

var curiosidades = [
  "Seu nome verdadeiro é Sarah Fortune.",
  "Ela utiliza duas pistolas personalizadas chamadas Shock e Awe.",
  "É uma das campeãs mais populares de League of Legends.",
  "Ela apareceu em diversas histórias, quadrinhos e eventos do universo de League of Legends.",
  "Sua rivalidade com Gangplank é uma das mais conhecidas da lore de Bilgewater."
];

var contador = 0;

botao.addEventListener("click", function() {
  resposta.textContent = curiosidades[contador];
  contador++;

  if (contador >= curiosidades.length) {
    contador = 0;
  }
});