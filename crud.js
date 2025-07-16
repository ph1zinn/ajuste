const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let personagens = []; 

function menu() {
    console.log('\n' + '='.repeat(30));
    console.log('1. Criar personagem'); 
    console.log('2. Listar personagens');
    console.log('3. Editar personagem');
    console.log('4. Excluir personagem');
    console.log('5. Ache seu personagem pela arma')
    console.log('6. Sair'); // Nova opção para sair
    console.log('\n' + '='.repeat(30));

    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':

                criarPersonagem();
                break;
            case '2':
                listarPersonagens();
                break;
            case '3':
                editarPersonagem();
                break;
            case '4':
                excluirPersonagem();
                break;
            case'5':
                achePersonagem();
                break;
            case '6': // Caso para a nova opção de sair
                rl.close(); // Fecha a interface de leitura
                console.log('Saindo do programa. Até mais!');
                break;
            default:
                console.log('Opção inválida. Tente novamente');
                menu();
        }
    });
}

function criarPersonagem() {
    rl.question('Digite o nome do personagem: ', (nome) => {
        rl.question('Escolha o nível do seu personagem: ', (nível) => {
            rl.question('Escolha a cor da camisa do personagem: ', (camisa) => {
                rl.question('Escolha a arma do seu personagem: ', (arma) => {
                    const personagem = {
                        nome,
                        nível, 
                        camisa,
                        arma,
                    };
                    personagens.push(personagem);
                    console.log('Seu personagem foi criado com sucesso!!');
                    console.log('Deseja criar outro personagem?: (s/n)');

                    rl.question('', (resposta) => {
                        resposta.toLowerCase() === 's'
                            ? criarPersonagem()
                            : menu();
                    });
                });
            }); 
        }); 
    }); 
}

function listarPersonagens() {
    if (personagens.length === 0) { 
        console.log('Nenhum personagem criado.');
    } else {
        console.log('\n=== LISTA DE PERSONAGENS ===');
        personagens.forEach((personagem, index) => { 
            console.log(
                `${index + 1}. Nome: ${personagem.nome} | Nível: ${personagem.nível} | Camisa: ${personagem.camisa} | Arma: ${personagem.arma}`
            );
        });
    }
    console.log('\nPresione Enter para voltar ao menu...');
    rl.question('', () => menu()); 
}

function editarPersonagem() {
    if (personagens.length === 0) { 
        console.log('Nenhum personagem para editar.');
        console.log('\nPresione Enter para voltar ao menu...');
        rl.question('', () => menu());
    } else {
        console.log('\n=== PERSONAGENS CRIADOS ===');
        personagens.forEach((personagem, index) => { 
            console.log(
                `${index + 1}. Nome: ${personagem.nome} | Nível: ${personagem.nível} | Camisa: ${personagem.camisa} | Arma: ${personagem.arma}`
            );
        });

        rl.question('\nDigite o número do personagem que você deseja editar: ', (num) => {
            const index = parseInt(num, 10) - 1;
            if (index < 0 || index >= personagens.length) { 
                console.log('Número inválido');
                console.log('\nPresione Enter para voltar ao menu...');
                rl.question('', () => menu());
            } else { 
                rl.question('Digite o nome do personagem: ', (nome) => {
                    rl.question('Escolha a cor de cabelo do personagem: ', (nível) => {
                        rl.question('Escolha a cor da camisa do personagem: ', (camisa) => {
                            rl.question('Escolha a arma do seu personagem: ', (arma) => {
                                personagens[index] = { 
                                    nome,
                                    nível,
                                    camisa,
                                    arma,
                                };
                                console.log('Personagem editado com sucesso!');
                                console.log('\nPressione Enter para voltar ao menu...');
                                rl.question('', () => menu()); 
                            });
                        });
                    });
                });
            }
        });
    }
}

function excluirPersonagem() {
    if (personagens.length === 0) { 
        console.log('Nenhum personagem para excluir.');
        console.log('\nPresione Enter para voltar ao menu...');
        rl.question('', () => menu());
    } else {
        console.log('\n=== PERSONAGENS CRIADOS ===');
        personagens.forEach((personagem, index) => { 
            console.log(
                `${index + 1}. Nome: ${personagem.nome} | Nível: ${personagem.nível} | Camisa: ${personagem.camisa} | Arma: ${personagem.arma}`
            );
        });

        rl.question('\nDigite o número do personagem que você deseja excluir: ', (num) => { 
            const index = parseInt(num, 10) - 1;

            if (index >= 0 && index < personagens.length) { 
                const [removido] = personagens.splice(index, 1);
                console.log(`Personagem ${removido.nome} foi excluído com sucesso!`); 
            } else {
                console.log('Número inválido!');
            }
            console.log('\nPresione Enter para voltar ao menu...');
            rl.question('', () => menu());
        });
    }
}

function achePersonagem() {
    if (personagens.length === 0) {
        console.log('Nenhum personagem para encontar.')
        console.log('\nAperte Enter para voltar para o menu.')
        rl.question('', () => menu());
    }else{
        rl.question('Vamos achar com base na arma! Digite o nome da arma do seu personagem: ', (arma) => {
            let procura = arma.toLocaleLowerCase().trim()
            let personagensFilter = personagens.filter(personagem => personagem.arma === procura)
            console.log(personagensFilter);
            console.log('\nPresione Enter para voltar ao menu...');
            rl.question('', () => menu());
        })
    }
}

menu();