const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let notas = [];

rl.question('Digite a nota da Prova 1: ', (nota1Str) => {
  const nota1 = parseFloat(nota1Str);

  rl.question('\nDigite a nota da Prova 2: ', (nota2Str) => {
    const nota2 = parseFloat(nota2Str);

    notas.push(nota1);
    notas.push(nota2);

    const soma = notas.reduce((acc, curr) => acc + curr, 0);
    const media = soma / notas.length;

    console.log(`\nA média das notas é: ${media.toFixed(2)}`);

    rl.close();
  });
});