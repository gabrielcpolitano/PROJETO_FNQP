//Escreva um programa que verifica se um número é positivo, negativo ou zero.

function defineNumero(numero) {
    if (numero > 0)
        return "Positivo";
    if (numero < 0)
        return "Negativo";
    if (numero === 0)
        return "Zero";
    else
        return "Numero fora do range";
};

console.log(defineNumero(0) === "Zero" ? "Passou" : "Não passou")
console.log(defineNumero(-1) === "Negativo" ? "Passou" : "Não passou")
console.log(defineNumero(1) === "Positivo" ? "Passou" : "Não passou")
console.log(defineNumero(-25) === "Negativo" ? "Passou" : "Não passou")
console.log(defineNumero(150) === "Positivo" ? "Passou" : "Não passou")
console.log(defineNumero(null))