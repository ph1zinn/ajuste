// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Digite um número da tabuada de 1 a 100 que você gostaria de calcular: ', (input) => {
  
//     const tabuada = parseInt(input);

//     if (isNaN(tabuada) || tabuada < 1 || tabuada > 100) {
//         console.log("Por favor, digite um número válido entre 1 e 100.");
//     } else {
//         console.log(`\nTabuada do ${tabuada}:\n`);

//         for (let i = 1; i <= 100; i++) {
//             console.log(`${tabuada} x ${i} = ${tabuada * i}`);
//         }
//     }

//     rl.close();
// });]


// let somaPares = 0;
// let somaImpares = 0;
// let totalPares = 0;
// let totalImpares = 0;

// for (let i = 0; i <= 999; i++) {
//     if (i % 2 == 0) {

//         somaPares += i;
//         totalPares++;
//      } else {
//         somaImpares += i;
//         totalImpares++;
        
//     }
// }

// console.log(`Soma dos números pares: ${somaPares}`);
// console.log(`Total de números pares: ${totalPares}`);
// console.log(`Soma dos números ímpares: ${somaImpares}`);
// console.log(`Total de números ímpares: ${totalImpares}`);

// let mediaPares = 0;
// if (totalPares > 0) { 
//     mediaPares = somaPares / totalPares;
// }
// console.log(`Média dos números pares: ${mediaPares.toFixed(2)}`);

// let mediaImpares = 0;
// if (totalImpares > 0) {
//     mediaImpares = somaImpares / totalImpares;
// }
// console.log(`Média dos números ímpares: ${mediaImpares.toFixed(2)}`);

// if (somaPares > somaImpares) {
//     console.log("A soma total dos números pares é maior.");
// } else if (somaImpares > somaPares) {
//     console.log("A soma total dos números ímpares é maior.");
// } else {
//     console.log("A soma total dos números pares e ímpares é igual.");
// }