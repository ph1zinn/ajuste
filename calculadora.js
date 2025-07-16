const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculadora() {
    console.log("-----------------------------------------");
    console.log("       Calculadora Básica                ");
    console.log("-----------------------------------------");
    console.log("Operações disponíveis:");                 
    console.log("  1. Adição (+)");
    console.log("  2. Subtração (-)");
    console.log("  3. Multiplicação (*)");
    console.log("  4. Divisão (/)");
    console.log("-----------------------------------------");

    rl.question('Digite o primeiro número: ', (num1Input) => {
        const num1 = parseFloat(num1Input);

        if (isNaN(num1)) {
            console.log("Entrada inválida. Por favor, digite um número.");
            rl.close();
            return;
        }

        rl.question('Digite a operação (+, -, *, /): ', (operacao) => {
            if (!['+', '-', '*', '/'].includes(operacao)) {
                console.log("Operação inválida. Por favor, use +, -, * ou /.");
                rl.close();
                return;
            }

            rl.question('Digite o segundo número: ', (num2Input) => {
                const num2 = parseFloat(num2Input);

                if (isNaN(num2)) {
                    console.log("Entrada inválida. Por favor, digite um número.");
                    rl.close();
                    return;
                }

                let resultado;

                switch (operacao) {
                    case '+':
                        resultado = num1 + num2;
                        break;
                    case '-':
                        resultado = num1 - num2;
                        break;
                    case '*':
                        resultado = num1 * num2;
                        break;
                    case '/':
                        if (num2 === 0) {
                            console.log("Erro: Divisão por zero não é permitida.");
                            rl.close();
                            return;
                        }
                        resultado = num1 / num2;
                        break;
                }

                console.log(`\nO resultado de ${num1} ${operacao} ${num2} é: ${resultado}`);
                console.log("-----------------------------------------");
                console.log("   Obrigado por usar a calculadora!      ");
                console.log("-----------------------------------------");
                rl.close();
            });
        });
    });
}

// Inicia a calculadora
calculadora();