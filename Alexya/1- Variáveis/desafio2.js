//Crie variáveis para dois números e calcule a soma, subtração, multiplicação e divisão. Exiba os resultados no console.
const numero1 = 3;
const numero2 = 20;

const soma = () => {
    return numero1 + numero2;
}

const multiplicacao = () => {
    return numero2 * numero1;
}

const subtracao = () => {
    return numero2 - numero1;
}

const divisao = () => {
    return numero2 / numero1;
}

console.log(`soma de ${numero1}+ ${numero2}:`, soma());
console.log(`subtracao de ${numero2} - ${numero1}:`,subtracao());
console.log(`multiplicacao de ${numero2} * ${numero1}:`,multiplicacao());
console.log(`divisao de ${numero2} / ${numero1}:`,divisao());