//Crie um array de frutas.Escreva uma função que adicione uma nova fruta ao array e retorne o array
//atualizado.

const frutas = ["banana", "tangerina", "uva", "laranja"];

function AdicionaFruta(array, fruta) {
    array.splice(Number.MAX_VALUE, 0, fruta);
    return array;
}
console.log('original: ', frutas);
console.log('adicionando `manga`: ',AdicionaFruta(frutas, "manga"));