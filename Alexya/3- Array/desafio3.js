 //Crie uma função que receba um array e um número como argumentos e retorne true se o número
 //estiver no array, e false caso contrário
var inteiros = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function PossuiNumeroNoArray(array, numero) {
    return array.includes(numero);
}

console.log(PossuiNumeroNoArray(inteiros, 7) == true ? 'Passou' : 'Nao passou');
console.log(PossuiNumeroNoArray(inteiros, 75) == false ? 'Passou' : 'Nao passou');
console.log(PossuiNumeroNoArray(inteiros, 0) == false ? 'Passou' : 'Nao passou');
console.log(PossuiNumeroNoArray(inteiros, 10) == true ? 'Passou' : 'Nao passou');