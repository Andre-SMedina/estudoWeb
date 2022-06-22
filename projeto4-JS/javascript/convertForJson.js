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
  },
  {
    id: 3,
    description: "Treinar",
    isCompleted: true,
  },
];

//objeto JSON criado
const todosJSON = JSON.stringify(todos);
//para transformar de volta em uma lista
const todosList = JSON.parse(todosJSON);

console.log(todosList[2])