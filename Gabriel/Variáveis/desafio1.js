// 1. Declaração de Variáveis
// Declare três variáveis com valores diferentes. Uma string, um número e um booleano. Em seguida, exiba cada valor no console.

const declaração = () => {
  console.log('Olá')
  console.log(5)
  console.log(true)
}

declaração()




/*  Faz linha de teste para esse código:  */



// Função de teste para verificar a saída da função 'declaração'
function testeDeclaracao() {
  // Armazena a saída esperada
  const saidaEsperada = ['Olá', 5, true];
  
  // Substitui o console.log por uma função de captura de saída
  const saidas = [];
  const originalConsoleLog = console.log;
  console.log = (...args) => saidas.push(...args);

  // Executa a função 'declaração'
  declaração();

  // Restaura o console.log original
  console.log = originalConsoleLog;

  // Verifica se a saída corresponde à saída esperada
  const resultado = saidas.every((valor, indice) => valor === saidaEsperada[indice]);
  console.log(`Teste ${resultado ? 'PASSOU' : 'FALHOU'}`);
}

// Executa o teste
testeDeclaracao();
