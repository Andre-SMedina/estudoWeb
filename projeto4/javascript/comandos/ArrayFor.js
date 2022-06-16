// Alt+x para executar no console

let num = [5, 3, 6, 8, 9, 12, 4]; // criar um array
num.push(7); // adicionar elemento na última posição
num[5] = 2; //adicionar elemento no array dizendo a posição
num.sort(); //organiza em ordem crescente

console.log(`o valor 7 está na posição ${num.indexOf(7)}`);
console.log(`O vetor: ${num}`);
console.log(`O vetor tem: ${num.length} elementos`); //diz a a quantidade de elementos
console.log(`O primeiro elemento do vetor é: ${num[0]}`);

for (let i = 0; i < num.length; i++) {
  console.log(`for: ${num[i]}`);
}
for (const pos in num) {
  console.log(`for in: ${num[pos]}`);
}
