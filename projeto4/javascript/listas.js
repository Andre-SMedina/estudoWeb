const names = ["Andre", "pedro", "Carlos"];

names.push("maria"); //add no final da lista
names.unshift("Joao"); //add no início da lista
names.shift(); //remove o primeiro da lista
names.pop(); //remove o último da lista
names[1] = "Flávia"; //altera o item na posição 3
names.sort(); //organiza em ordem alfabética e números em ordem crescente

//console.log(names.indexOf("Carlos"));//mostra a posição do elemento, e se não encontrar retorna -1
//console.log(names.length);//mostra quantos itens tem na lista
//console.log(names);

// ------------------------------------------------------------------

const nums = [2, 4, 5, 6, 3, 8];
const numsX2 = nums.map(function (number) {
  //multiplica por 2 cada elemento da lista devolvendo outra lista
  return number * 2;
});
const numsPar = nums.filter(function (number) {
  //cria uma lista apenas com os elementos que atenderam a função
  return number % 2 == 0;
});
const numsSoma = nums.reduce(function (number, accumulator) {
  //faz a soma de todos os items. accumulator é onde vai armazenar a soma
  return number + accumulator;
}, 0); //esse zero é o valor inicial do accumulator

// console.log(numsX2);
// console.log(numsPar);
// console.log(numsSoma);

// -------------------------------------------------------------------

//cria um objeto e suas propriedades
const person = {
  firstName: "André",
  lastName: "Luís",
  age: 21,
  hobbies: ["Assistir animes", "jogar games", "estudar"],
};
//add uma propriedade a person
person.profession = "Dev";
//add um objeto a person
person.curriculo = { Ingles: "2 anos", tecInform: "1 ano" };
//"Destructuring Assignments": cria uma variável para cada valor de cada propriedade da person
const {
  firstName: primeiroNome, //dar outro nome a variável colocando ":"
  curriculo: { Ingles: curso }, //cria uma variável com nome curso, atribuindo o valor da propriedade Ingles
  lastName,
  age,
  hobbies,
} = person;

// console.log(person.age);
// console.log(person.firstName);
// console.log(person.curriculo.tecInform);
// console.log(curso);
// console.log(primeiroNome + " " + lastName);
// console.log(person);

const todos = [
  {
    id: 1,
    description: "Estudar programação",
    isCompleted: false,
  },
  {
    id: 2,
    description: "Ler",
    isCompleted: true,
  },{
    id: 3,
    description: "Treinar",
    isCompleted: true,
  },
];

console.log(todos[2].description)