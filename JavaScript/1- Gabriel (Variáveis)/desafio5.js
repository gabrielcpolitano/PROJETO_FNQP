// 5. Operadores de Comparação:
// Declare  duas  variáveis  e  use  operadores  de  comparação  (==,  ===,  !=,  !==,  <,  >,  <=,  >=)  para comparar os valores.

const comparação = () => {
  const variável1 = 5
  const variável2 = '7'

  console.log(variável1 == variável2);
  console.log(variável1 === variável2);
  console.log(variável1 != variável2);
  console.log(variável1 !== variável2);
  console.log(variável1 < variável2);
  console.log(variável1 > variável2);
  console.log(variável1 <= variável2);
  console.log(variável1 >= variável2);
  
}


// Função de teste para verificar a saída da função 'comparação'
function testeComparação() {
  // Armazena a saída esperada
  const saidaEsperada = [
      false, false, true, true,
      true, false, true, false
  ];

  // Substitui o console.log por uma função de captura de saída
  const saidas = [];
  const originalConsoleLog = console.log;
  console.log = (...args) => saidas.push(...args);

  // Executa a função 'comparação'
  comparação();

  // Restaura o console.log original
  console.log = originalConsoleLog;

  // Verifica se a saída corresponde à saída esperada
  const resultado = saidas.every((valor, indice) => valor === saidaEsperada[indice]);
  console.log(`Teste ${resultado ? 'PASSOU' : 'FALHOU'}`);
}

// Executa o teste
testeComparação();
