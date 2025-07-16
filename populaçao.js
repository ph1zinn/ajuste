let populacaoA = 80000;
let populacaoB = 200000;
const taxaAumentoA = 0.03;
const taxaAumentoB = 0.015;
let anos = 0;

// Loop until Population A is greater than or equal to Population B
while (populacaoA < populacaoB) {
    populacaoA += populacaoA * taxaAumentoA;
    populacaoB += populacaoB * taxaAumentoB;
    anos++;

    console.log(
        `Ano ${anos}: População A = ${Math.floor(populacaoA)} habitantes | População B = ${Math.floor(populacaoB)} habitantes`
    );
}

console.log(`\nForam necessários ${anos} anos para que a População A (${Math.floor(populacaoA)} habitantes) fosse maior ou igual à População B (${Math.floor(populacaoB)} habitantes)!`);