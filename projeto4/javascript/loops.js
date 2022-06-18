var control = 0;

//   do {
//     console.log(`do while: ${control}`)
//     control++;
//   } while (control < 5);

//   while (control < 5) {
//     console.log(`while: ${control}`)
//     control++;
//   }
//---------------------------------------------------------
//   for(i = 0; i < 5; i++) {
//     console.log(`for : ${i}`)
//   }

const lista = ["Ferrari", "Tesla", "Mercedes"];
lista.BMW = "308T";//add na lista mas só o for in consegue ler

//for of lê apenas listas simples
// for (i of lista) {
//   console.log(`for of: ${i}`);
// }

// for in lê listas mais comlexas mas é mais lento
// for (const i in lista) {
//   console.log(`for in: ${i}`);
// }

lista.forEach(function (car, index) {
    console.log(`Item: ${car}`);
  console.log(`Posição: ${index}`);
});
