var anoForm = document.querySelector("#f_anoID");

anoForm.addEventListener("keyup", function (e) {
  var key = e.which || e.keyCode;
  if (key == 13) {
    // codigo da tecla enter
    verificar();
  }
});

function verificar() {
  var today = new Date();
  var anoNow = today.getFullYear();
  var sexo = document.querySelector("input[name='sexo']:checked").value;
  var msg = document.querySelector("#f_msg");
  var idade = anoNow - parseInt(anoForm.value);
  var img = document.querySelector("#imagem");

  if (anoForm.value.length == 0 || anoForm.value >= anoNow) {
    alert("Ano vazio ou menor que o atual");
  } else {
    msg.innerHTML = `Detectamos ${sexo} com ${idade} anos`;
    if (sexo == "Homem") {
      if (idade < 14) {
        img.src = "img/H9anos.jpg";
      } else if (idade < 26) {
        img.src = "img/H21anos.jpg";
      } else if (idade < 50) {
        img.src = "img/H40anos.jpg";
      } else if (idade < 100) {
        img.src = "img/H65anos.jpg";
      } else if (idade > 99) {
        img.src = "img/morto.png";
      }
    }
    if (sexo == "Mulher") {
      if (idade < 14) {
        img.src = "img/M9anos.jpg";
      } else if (idade < 26) {
        img.src = "img/M21anos.jpg";
      } else if (idade < 50) {
        img.src = "img/M40anos.jpg";
      } else if (idade < 100) {
        img.src = "img/M65anos.jpg";
      } else if (idade > 99) {
        img.src = "img/morto.png";
      }
    }
  }
}
