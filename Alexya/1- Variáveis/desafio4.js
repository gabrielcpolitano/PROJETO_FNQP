//Declare variáveis usando diferentes tipos de dados: number, string, boolean, object, e undefined.
//Use typeof para verificar e exibir o tipo de cada uma.

var salario = 387.8;
var nome = "Maria Lucia";
var ehCasado = true;
var pessoa = { salario, nome, ehCasado };
var vazio = null;
var undefined;

console.log('salario:', salario);
console.log('tipo do salario:', typeof (salario));

console.log(' nome:', nome);
console.log('tipo do nome:', typeof (nome));

console.log('ehCasado:', ehCasado);
console.log('tipo do ehCasado:', typeof (ehCasado));

console.log('pessoa:', pessoa);
console.log('tipo do pessoa:', typeof (pessoa));

console.log('vazio:', vazio);
console.log('tipo do vazio:', typeof (vazio));

console.log('undefined:', undefined);
console.log('tipo do undefined:', typeof (undefined));