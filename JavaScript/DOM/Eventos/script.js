document.addEventListener("mousemove", (e) => {
  if (e.pageX > 700) {
    document.querySelector("body").style.background = "black";
  } else {
    document.querySelector("body").style.background = "white";
  }
});

//evento 1
const img = document.querySelector("#img1");

function mudar() {
  if (img.src == "http://127.0.0.1:5500/Imagens/ex1.jpg") {
    img.src = "../../Imagens/ex2.jpg";
  } else {
    img.src = "../../Imagens/ex1.jpg";
  }
}

//evento 2
document.querySelector("#evento2 > button").onclick = function (e) {
  const elemento = document.querySelector("#evento2 > h2");
  if (elemento.innerText == "Texto alterado!") {
    elemento.innerText = "Texto original";
    e.innerText = "Mudar texto";
  } else {
    elemento.innerText = "Texto alterado!";
    e.innerText = "Voltar texto";
  }
};

//evento 3
document.querySelector("#add").addEventListener("click", adicionarEventos);
document.querySelector("#remove").addEventListener("click", removerEventos);

function adicionarEventos() {
  const e = document.querySelector("#exec");

  e.addEventListener("click", exec1);
  e.addEventListener("click", exec2);
}

function exec1() {
  const agora = new Date();
  document.querySelector("#tit1").innerText = agora.getSeconds();
}
function exec2() {
  const agora = new Date();
  document.querySelector("#tit2").innerText = agora.getSeconds();
}

function removerEventos() {
  document.querySelector("#exec").removeEventListener("click", exec2);
}

//evento 4 mouse
const texto = document.querySelector("#evento4 > h2");
let num = 0;

document.querySelector("#click").addEventListener("click", () => {
  texto.innerText = "Clicou";
});
document.querySelector("#down").addEventListener("mousedown", () => {
  texto.innerText = "mouse down";
});
document.querySelector("#up").addEventListener("mouseup", () => {
  texto.innerText = "mouse up";
});
document.querySelector("#enter").addEventListener("mouseenter", () => {
  texto.innerText = "mouse enter";
});
document.querySelector("#leave").addEventListener("mouseleave", () => {
  texto.innerText = "mouse leave";
});
document.querySelector("#move").addEventListener("mousemove", () => {
  texto.innerText = `mouse move ${(num += 1)}`;
});
document.querySelector("#doubleClick").addEventListener("dblclick", () => {
  texto.innerText = "Double Click";
});
document.querySelector("#dirbutton").addEventListener("contextmenu", () => {
  texto.innerText = "Botão direito";
});

//evento 5 teclado
const letras = document.getElementById("evento5").children;

letras[1].addEventListener("keydown", (letra) => {
  letras[1].value = "";
  letras[2].innerText = letra.key;
  if (letra.key == "a") {
    //não mostra a tecla que foi pressionada
    letra.preventDefault();
    letras[2].innerText = "Proibido a tecla 'a'";
  } else if (letra.code == "F1") {
    letra.preventDefault();
    letras[2].innerText = "Função do F1 desativada";
  }
});

letras[3].addEventListener("keyup", (letra) => {
  letras[4].innerText = letra.target.value;
});
