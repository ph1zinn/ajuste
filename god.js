let dias = 0;
let ano = 364;
const aumento = 1
while(dias < ano){
    dias += ano * aumento;
    dias++

    console.log(`Dia ${dias} para um ano ${ano}`)
}