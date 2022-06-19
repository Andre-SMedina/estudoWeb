//para exportar um módulo
module.exports = { parimp };
//para usar em outros módulos
// var modulo = require("./modulo")

function parimp(n) {
  if (n % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}
let res = parimp(18);
// console.log(res);

function soma(n1 = 0, n2 = 0) {
  return n1 + n2;
}
// console.log(soma(5));
// console.log(soma(5, 4));

let func = function (x) {
  return x * 2;
};
// console.log(func(5));

let amigo = {
  nome: "José",
  sexo: "M",
  peso: 85,
  engordar(p = 0) {
    if (p > 0) {
      console.log(
        `Pesava ${this.peso}Kg e agora está ${this.peso + p}. Você engordou!`
      );
    } else if (p < 0) {
      console.log(
        `Pesava ${this.peso}Kg e agora está ${this.peso + p}. Você emagreceu!`
      );
    } else {
      console.log(`Você não mudou de peso`);
    }
    this.peso += p;
  },
};
amigo.engordar(-5);

// Arrow functions---------------------------------
let hello = () => "Hello World";
let hello2 = (name, lastName) => `Hello ${name} ${lastName}`;
let hello3 = (fullName) => `Hello ${fullName}`;
let soma2 = (n1, n2) => n1 + n2;
let soma3 = (n1 = 0, n2 = 0) => n1 + n2;
let obj = () => ({ name: "André", lastName: "Luís" });
let obj2 = () => {
  let dic = {};
  dic.name = "André";
  dic.lastName = "Luís";
  return dic;
};
// console.log(hello());
// console.log(hello2("André", "Luís"));
// console.log(hello3("André Luís"));
// console.log(soma2(5, 4));
// console.log(soma3(4));
// console.log(obj());
// console.log(obj2().name)
