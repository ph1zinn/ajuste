const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

    console.log("-------------------------------------------")
    console.log("Olá, hoje vamos jogar pedra, papel, tesoura")
    console.log("-------------------------------------------")

    rl.question ('Escolha pedra, papel ou tesoura:', (input) => {
    
    const opcoes = ['pedra','papel', 'tesoura']; parseInt(input)
    let escolhaComputador = [];
    const escolhaUsuario = [];

    escolhaComputador = Math.floor(Math.random() * 3);{
        console.log(`Escolho: ${opcoes[escolhaComputador]}`)
    }

    if (escolhaUsuario === (escolhaComputador)){
        console.log('Deu empate!');
            }else if (escolhaUsuario == [0] && escolhaComputador == [2]){
                console.log('Você venceu!')
            }else{
                console.log('Você perdeu!')
}
rl.close()
    })