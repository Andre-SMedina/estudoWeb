const formulario = document.forms.form1;

formulario.addEventListener("submit", (e) => {
  const numero = document.forms.form1.number.value;
  if (numero != "5") {
    e.preventDefault();
    document.querySelector("#numberOk").innerText = `Não é o número ${numero}`;
  } else {
    document.querySelector("#numberOk").innerText = `Acertou!`;
  }
});

//FOCUS
const user2 = document.querySelector("[name='usuario2']");
const senha2 = document.querySelector("[name='senha2']");

user2.addEventListener("focus", (e) => {
  e.target.classList.add("fundoBlue");
});
user2.addEventListener("blur", (e) => {
  e.target.classList.remove("fundoBlue");
});
senha2.addEventListener("focus", (e) => {
  e.target.classList.add("fundoBlue");
});
senha2.addEventListener("blur", (e) => {
  e.target.classList.remove("fundoBlue");
});

//CHANGE
const tarefa = document.querySelector('[name="tarefa"]');
const duracao = document.querySelector('[name="duracao"]');

tarefa.addEventListener("change", (e) => {
  document.querySelector("#texto1").innerText = `Tarefa: ${e.target.value}`;
});
duracao.addEventListener("change", (e) => {
  document.querySelector("#texto2").innerText = `Duração: ${e.target.value}`;
});

//INPUT
document.querySelector("#introduzir").addEventListener("input", (e) => {
  document.querySelector("#texto3").innerText = e.target.value;
});

//COPY / CUT / PASTE
document.querySelector("#copiar").addEventListener("copy", (e) => {
  e.preventDefault();
});
