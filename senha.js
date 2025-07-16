// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const caracteres = 'QWERTYUIOPASDFGHJKLÇZXCVBNM,.;1234567890'

// caracteres.charAt(0);
// readline.question("Digite o comprimento da senha", resposta => {''
//     const tamanho = parseInt(resposta, 10)
//     if(isNaN){
//         console.log("Digite um número!")
//         readline.close()
//     }

//     let senha = []

//     for(let i = 0; i < tamanho; i++){
//         const indiceAlleatorio = Math.floor(Math.random() * caracteres.length)
//         senha += caracteres.charAt(indiceAlleatorio)
//     }
//     console.log(`senha gerada: ${senha}`)
// })

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

rl.question("Digite o comprimento da senha: ", resposta => {
    const tamanho = parseInt(resposta, 10);

 
    if (isNaN(tamanho) || tamanho <= 0) {
        console.log("Por favor, digite um número válido e maior que zero para o comprimento da senha.");
        rl.close();
        return;
    }

    let senha = [];

    for (let i = 0; i < tamanho; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        senha.push(caracteres.charAt(indiceAleatorio)); 
    }

   
    console.log(`Senha gerada: ${senha.join('')}`);
    rl.close(); 
});