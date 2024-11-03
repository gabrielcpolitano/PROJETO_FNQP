//Imprimir Números até o Usuário Parar(While Loop)
// Escreva um programa que pede números ao usuário e imprime, repetidamente, até que o usuário
// insira um número negativo

function programaWhileNumero() {
    let numero = 0;

    while (numero >= 0) {
        numero = parseInt(prompt("Digite um numero (insira um numero negativo para parar):"));

        if (numero >= 0) {
            console.log('seu numero: ', numero)
        } else {
            console.log("Numero negativo inserido, programa encerrando...")
        }
    }
}

programaWhileNumero();