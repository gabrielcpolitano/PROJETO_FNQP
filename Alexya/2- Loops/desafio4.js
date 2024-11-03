//Escreva um programa que recebe um número de 1 a 7 e imprime o dia da semana correspondente
//   (1 = Domingo, 2 = Segunda, ..., 7 = Sábado)

function Semana(dia) {
    switch (dia) {
        case 1:
            return "Domingo"
            break;
        case 2:
            return "Segunda"
            break;
        case 3:
            return "Terça"
            break;
        case 4:
            return "Quarta"
            break;
        case 5:
            return "Quinta"
            break;
        case 6:
            return "Sexta"
            break;
        case 7:
            return "Sábado"
            break;
        default: "Dia deve estar entre 1 e 7";
    }
}

console.log(`dia 7 é ${Semana(7)}`);
console.log(Semana(7)==="Sábado"?"Passou":"Falhou")
