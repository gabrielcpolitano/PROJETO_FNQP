/* 
 20. Redefinindo valores
    Crie uma variável com let, altere seu valor e exiba cada mudança no console. Tente fazer o
    mesmo com const e explique o erro.
*/

let rua = `Sao Paulo`;

rua = `Brasil`;

console.log(rua);


const cidade = `Sao Paulo`;

cidade = `Brasil`;

console.log(cidade);


console.log(`Erro pois const nao aceita alteracao de valor`)