document.body.style.background = "#7e91fd";
document.querySelector("#titulo").innerHTML = "Novo";

//ativa uma mensagem do navegador
//alert("Alerta!");

// if (confirm("Deseja ir para Google?")) {
//   location.href = "https://www.google.com.br";
// }

//html -> document.documentElement
//body -> document.body
//head -> document.head

console.log(document.querySelector("#input1").value);
console.log(document.querySelector("#parag1").innerText);

//pega todas as tags "p"
document.getElementsByTagName("p")[1].innerText = "Alterado";

console.log(document.querySelectorAll(".tit2"));
document.querySelector("h2").innerText = "Alterando H2 por queryS";
document.querySelectorAll("h2")[1].innerText = "Alterando por QuerySAll";

document.querySelector("ul > li:last-child").innerText = "Alterado";

//remover elementos
document.querySelectorAll("#lista > li")[1].remove();

document.querySelector("#div1 > h1").innerText = "Alterado";
document.querySelector("#div1 > div > p").innerText = "Alterado tb";

//innerText só muda o texto e innerHTML pode mudar o texto e incluir novas tags
document.querySelector("#innerText").innerText =
  "Mudando apenas o <u>texto</u>";
document.querySelector("#innerHTML").innerHTML =
  "Mudando o texto e <u>formatação</u>";

document.querySelector("#imagem").src = "ex2.jpg";

//verificar se o elemento tem um determinado atributo
const elemento = document.querySelector("h3");

if (elemento.hasAttribute("id")) {
  console.log("Sim");
}

//pegar o nome do atributo do elemento
console.log(elemento.getAttribute("id"));

//adicionar um atributo ao elemento
elemento.setAttribute("title", "inserindo atributo");

//ver todos os atributos de um elemento
console.log(elemento.attributes);

//remover um atributo do elemento
elemento.removeAttribute("class");
if (!elemento.hasAttribute("class")) {
  console.log("Attributo removido");
}

//adicionar algo próximo ou dentro da div #testAdd

const testeAdd = document.querySelector("#testeAdd");

//add texto
testeAdd.before("Texto add antes da div");
testeAdd.after("Texto add depois da div");
testeAdd.prepend("Texto dentro da div e antes do texto ----");
testeAdd.append("----Texto dentro da div e depois do texto");
testeAdd.insertAdjacentText("beforebegin", "AAAAxxx");
testeAdd.insertAdjacentText("afterbegin", "BBBBxxx");
testeAdd.insertAdjacentText("beforeend", "xxxCCCCxxx");
testeAdd.insertAdjacentText("afterend", "DDDD");

//add elemento HTML
testeAdd.insertAdjacentHTML(
  "afterbegin",
  "<span style= 'background : yellow'>Teste</span>"
);

//criar um novo elemento
let novoElemento = document.createElement("p");
novoElemento.className = "alerta";
novoElemento.innerText = "Vou embora jajá!";

testeAdd.appendChild(novoElemento);

//para clonar o elemento e seus filhos, coloca true
// document.querySelector("#testeAdd").appendChild(novoElemento.cloneNode(true));

setTimeout(() => {
  document.querySelector(".alerta").remove();
  // testeAdd.removeChild(novoElemento);
}, 2000);

//classes
const classes = document.querySelector("#classes");

//add uma classe
classes.classList.add("estilo1");
classes.classList.remove("estilo3");

//se existir a classe, ela é apagada, se não existir não faz nada
classes.classList.toggle("estilo3");

//ESTILOS
const estilos = document.querySelector("#estilos");

estilos.style.cssText = "background-color: black; border: solid 2px red;";
estilos.style.color = "white";
estilos.style.marginTop = "10px";

console.log(estilos.style.color);

//pega os atributos quando vem por classes
console.log(getComputedStyle(estilos).width);
