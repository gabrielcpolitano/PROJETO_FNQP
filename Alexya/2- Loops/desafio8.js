// Somar os Números de 1 a 100(For Loop)
//Escreva um programa que soma todos os números de 1 a 100.


function SomaDeUmACem() {
    let soma = 0;
    for (let i = 1; i <= 100; i++)
        soma = soma + i;
    return soma;
    
}
console.log('soma: ', SomaDeUmACem());
console.log(SomaDeUmACem() === 5050 ? "Passou" : "Falhou")
