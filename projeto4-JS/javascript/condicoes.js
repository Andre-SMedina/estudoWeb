const n1 = 4;
const n2 = 6;

//if e else com && e ||
/* if (n1 === n2 && n1 + 2 == 6) {
  console.log("Os dois são iguais e n1 + 2 é 6.");
} else if (n1 === n2 || n1 + n2 == 6) {
  console.log("Ou os dois são iguais ou a soma é 6.");
} else {
  console.log("Tá tudo errado.");
}
 */
//-----------------------------------------------------

//ternário
const n3 = n1 > n2 ? 10 : 0;

// console.log(`n3 é ${n3}`);

//----------------------------------------------------

//switch
/* switch (n3) {
  case 10:
    console.log(`n3 é: ${n3}`);
    break;
  case 0:
    console.log(`n3 é: ${n3}`);
    break;
  default:
    console.log(`Não deu nada`);
} */

//uma variável com string vazia, null, undefined ou com valor 0 é false
const x = "";
//!! verifica se é false ou true
// console.log(!!x)
// x?console.log(true):console.log(false)

//lista e objeto vazio é true
const list = [];
const object = {};
console.log(!![]);
