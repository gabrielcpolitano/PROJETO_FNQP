// Dado um array de strings, escreva uma função que conte o número de vezes que cada palavra
// aparece no array e retorne um objeto com os resultados.Por exemplo:
//contarOcorrencias(["banana", "maçã", "banana", "laranja"]);
// // Saída: { banana: 2, maçã: 1, laranja: 1
var strings = ["banana", "maçã","melancia", "banana", "laranja", "melancia", "manga"];

function ContarOcorrencias(array) {
    const retorno = {};
    //varrer o array pelo tamanho
    for (let i = 0; i < strings.length; i++) {
        //guardar o item para validar se esta dentro do objeto criado
        let item = strings[i];

        if (retorno[item]) {
            retorno[item] += 1;
        } else {
            retorno[item] = 1;
        }
    }
    return retorno;
};

console.log(ContarOcorrencias(strings));