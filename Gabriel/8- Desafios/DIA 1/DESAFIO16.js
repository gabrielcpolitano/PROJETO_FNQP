/* 
16. Comparação com valores falsy
    Teste valores como null, undefined, 0, NaN e strings vazias com operadores lógicos e explique
    os resultados.
*/

let valor1 = null;
let valor2 = undefined;
let valor3 = 0;
let valor4 = NaN;
let valor5 = ``;

console.log(valor1 == valor2);
console.log(valor3 == valor5);
console.log(valor2 == valor4);
console.log(valor4 == valor5);

console.log(`Em termos de valores, null == undefined, 0 == '', mas todos sao diferentes em tipos`)