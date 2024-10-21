//Crie variáveis e utilize operadores de incremento(++) e decremento(--).

let inicio = 0;
let final = 15;

console.log('inicio: ', inicio);
console.log('final: ', final);

inicio === 0 ? console.log('inicio esta em 0') : console.log('incicio esta em ', inicio); 

console.log('inicio++: ', ++inicio);
console.log('finall--: ', --final)

inicio === 0 ? console.log('inicio esta em 0') : console.log('incicio esta em ', inicio);

console.log(`utilizando um for, a variavel i iniciou em ${inicio} e vai ate ${final}`)
for (let i = inicio; i <= final; i++) {
    console.log(`i: ${i}, ++inicio: ${++inicio}`)
}