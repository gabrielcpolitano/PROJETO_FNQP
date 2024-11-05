//Crie um array de números inteiros e escreva uma função para calcular a soma de todos os
// elementos do array

var inteiros = [1, 2, 3, 4, 5, 7, 8, 9, 10];

function SomaInteiros() {
    var soma = 0;
    for (let i = 0; i < inteiros.length; i++) {
        soma += inteiros[i];
    }
    return soma;
}

console.log(SomaInteiros());