const lista = [
  { id: "kkk", nome: "andre", prof: "tec" },
  { id: "aaa", nome: "pedro", prof: "cantor" },
  { id: "sss", nome: "joao", prof: "musico" },
];

console.log(lista.find((ident) => ident.id === "aaa"));
