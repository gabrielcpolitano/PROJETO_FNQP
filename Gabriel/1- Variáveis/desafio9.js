// 9. Cálculo de Porcentagem:
// Crie um código que calcule a porcentagem de um valor dado outro valor

//cria var com da porcentagem

//cria var para receber

//mostar o valor

// Função para calcular porcentagem
function porcentagem() {
  const porcento = 70;
  const valor = 10;
  console.log((porcento / 100) * valor);
}

// Função de teste para verificar a saída da função 'porcentagem'
function testePorcentagem() {
  // Armazena a saída esperada
  const saidaEsperada = 7;

  // Substitui o console.log por uma função de captura de saída
  const saidas = [];
  const originalConsoleLog = console.log;
  console.log = (...args) => saidas.push(...args);

  // Executa a função 'porcentagem'
  porcentagem();

  // Restaura o console.log original
  console.log = originalConsoleLog;

  // Verifica se a saída corresponde à saída esperada
  const resultado = saidas[0] === saidaEsperada;
  console.log(`Teste ${resultado ? 'PASSOU' : 'FALHOU'}`);
}

// Executa o teste
testePorcentagem();
