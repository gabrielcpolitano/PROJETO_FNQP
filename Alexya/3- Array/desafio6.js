// Escreva uma função que receba um array de números e retorne um objeto com o maior e o menor
//número do array

function MenorMaior(array) {
    var maior = array[0];
    var menor = array[0];

    for (let i = 0; i < array.length; i++) {
        var atual = array[i];

        if (atual > maior) {
            maior = atual;
        } if (atual < menor) {
            menor = atual
        }
    }
    return { maior: maior, menor: menor };
};

var inteiros = [2, 3, 4, 5, 7, 8, 9, 6, 1, 75, 25, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log(MenorMaior(inteiros));