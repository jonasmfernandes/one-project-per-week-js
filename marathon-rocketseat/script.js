const elementoResposta = document.querySelector("#resposta");
const inputPergunta = document.querySelector("#inputResposta");
const certeza = document.querySelector("#certeza");

const respostas = [
  "Certeza!",
  "Não tenho tanta certeza",
  "Não conte com isso",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde",
  "Sim, definitivamente",
  "Minha resposta é não",
  "Você pode contar com isso",
  "Melhor não te dizer agora",
  "A meu ver, sim",
  "Minhas fontes dizem que não",
  "Provavelmente",
  "Não é possível prever agora",
  "As perspectivas não são tão boas",
  "Sim",
  "Sinais apontam que sim",
];

function fazerPergunta() {
  if (inputPergunta.value == "") {
    window.alert("escreve alguma coisa ai meu chapa");
    return;
  }

  // buttonPerguntar.setAttribute("disabled", true)
  const pergunta = "<div>" + inputPergunta.value + "</div>";
  const totalRespostas = respostas.length;
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas);
  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio];
  elementoResposta.style.opacity = 1;
  setTimeout(function () {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled");
  }, 3000);

  if (numeroAleatorio == 0){
    certeza.innerHTML = "fatos"
  }
}
