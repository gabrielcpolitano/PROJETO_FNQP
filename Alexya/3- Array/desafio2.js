//Escreva uma função que receba um array de números e retorne apenas os números pares.

var inteiros = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function RetornaPares() {
    var numerosPares=[];
    for (let i = 0; i < inteiros.length; i++) {
        if (inteiros[i] % 2 === 0) {
            numerosPares.push(inteiros[i])
        }
    }
    return numerosPares;
}
console.log('vetor de inteiros: ', inteiros);
console.log('vetor com os pares: ')
console.log(RetornaPares());