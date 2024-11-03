//Imprimir Tabuada de um Número(Do While Loop)
//Escreva um programa que imprime a tabuada de um número até 10, usando o loop do while

function Tabuada(numero) {
    var i = 0;
    var calculo = 0;

    do {
        calculo = numero * i;
        console.log(`${numero} * ${i} = `, calculo);
        i = i + 1;
    } while (i <= 10);
}

function ProgramaTabuada() {
    let numero = 0;

    while (numero >= 0) {
        numero = parseInt(prompt("Insira o número para calcular a tabuada (insira negativo para parar):"));
        if (numero >= 0) {
            console.log(" ");
            Tabuada(numero);
        }
        else {
            console.log("Numero negativo inserido. Parando...")
        }
    }
}

ProgramaTabuada();