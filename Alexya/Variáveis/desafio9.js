//Crie um código que calcule a porcentagem de um valor dado outro valor.

function calculaPorcentagem(valor, total) {
    if (total == 0) {
        console.log("não é possivel calcular porcentagem para total igual a zero")
    }
    const porcentagem = (valor/total)*100
    return Math.round(porcentagem);
}

var total = 70;
var valor = 6;

var resultado = calculaPorcentagem(valor, total);
console.log(`a porcentagem de ${valor} em relacao a ${total} eh igual a ${resultado}%`)


total = 65;
valor = 15;

resultado = calculaPorcentagem(valor, total);
console.log(`a porcentagem de ${valor} em relacao a ${total} eh igual a ${resultado}%`)