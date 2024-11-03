//Crie um programa que converte uma nota(0 a 100) para conceitos de acordo com a tabela: A
//   (90 - 100), B(80 - 89), C(70 - 79), D(60 - 69) e F(0 - 59)
var nota = prompt("Insira uma nota");

function converteNota(nota) {
    if (nota >= 0 && nota <= 59) { return "F"; }
    else if (nota >= 60 && nota <= 69) { return "D" }
    else if (nota >= 70 && nota <= 79) { return "C" }
    else if (nota >= 80 && nota <= 89) { return "B" }
    else if (nota >= 90 && nota <= 100) { return "A" }
    else if (nota < 0 || nota > 100) { return "Nota invalida, insira de 0 a 100" }
    else { return "Nota invalida, insira de 0 a 100" }
}
console.log(`A nota ${nota} equivale ao conceito ${converteNota(nota)}`)
var nota = 100;
console.log(`A nota ${nota} equivale ao conceito ${converteNota(nota)}`)