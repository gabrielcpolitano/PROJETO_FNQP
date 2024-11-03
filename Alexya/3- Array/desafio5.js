//Dado um array de objetos, onde cada objeto representa um estudante com nome e nota, escreva
// uma função que ordene os estudantes em ordem decrescente de nota

var estudantes = [
    { nome: "Ana", nota: 8.5 },
    { nome: "Bruno", nota: 7.3 },
    { nome: "Carla", nota: 9.1 },
    { nome: "Diego", nota: 6.7 },
    { nome: "Fernanda", nota: 8.9 },
    { nome: "Gustavo", nota: 5.4 }
];


function OrdenaEstudantes(array) {
    //usa o sort mas compara com a propriedade nota especificamente
    array.sort(function (a, b) {
        if (a.nota > b.nota) {
            return 1
        }
        if (a.nota < b.nota) {
            return -1;
        }
        return 0;
    });
    return array;
};

console.log(OrdenaEstudantes(estudantes));