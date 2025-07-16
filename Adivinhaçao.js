const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function jogarAdivinhacao() {
    // Mensagem de boas-vindas
    console.log("-----------------------------------------");
    console.log("  Bem-vindo(a) ao Jogo de Adivinhação!   ");
    console.log(" Tente adivinhar o número entre 1 e 100. ");
    console.log(" Você tem no máximo 10 tentativas. "); // Informa o limite
    console.log("-----------------------------------------");

    const numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Gera um número entre 1 e 100
    let tentativas = 0; // Contador de tentativas
    const MAX_TENTATIVAS = 10; // Define o número máximo de tentativas

    function fazerTentativa() {
        tentativas++; // Incrementa o contador a cada tentativa

        // Verifica se o número máximo de tentativas foi atingido
        if (tentativas > MAX_TENTATIVAS) {
            console.log("\n-----------------------------------------");
            console.log("  Você excedeu o número máximo de tentativas (10). ");
            console.log(` O número secreto era ${numeroAleatorio}. `); // Revela o número
            console.log("  Que pena! Mais sorte na próxima vez!   ");
            console.log("-----------------------------------------");
            rl.close(); // Fecha a interface readline
            return; // Sai da função
        }

        // Adiciona uma quebra de linha antes da pergunta do palpite
        rl.question(`\nTentativa ${tentativas}/${MAX_TENTATIVAS}: Qual é o seu palpite? `, (palpiteUsuario) => {
            const palpite = parseInt(palpiteUsuario);

            if (isNaN(palpite)) {
                console.log("Por favor, digite um número válido.");
                tentativas--; // Desfaz o incremento se a entrada for inválida
                fazerTentativa();
                return;
            }

            if (palpite === numeroAleatorio) {
                console.log(`\nParabéns! Você acertou o número ${numeroAleatorio}!`);
                console.log(`Você precisou de ${tentativas} tentativa(s) para acertar.`); // Estatística
                // Mensagem de despedida
                console.log("-----------------------------------------");
                console.log("  Obrigado(a) por jogar! Até a próxima!  ");
                console.log("-----------------------------------------");
                rl.close(); // Fecha a interface readline
            } else if (palpite < numeroAleatorio) {
                console.log("\nMuito baixo! Tente um número maior."); // Adiciona quebra de linha
                fazerTentativa();
            } else {
                console.log("\nMuito alto! Tente um número menor."); // Adiciona quebra de linha
                fazerTentativa();
            }
        });
    }

    fazerTentativa(); // Inicia o jogo
}

// Chama a função principal para começar o jogo
jogarAdivinhacao();