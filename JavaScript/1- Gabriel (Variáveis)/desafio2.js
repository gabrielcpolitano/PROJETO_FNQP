// 2. Operações Matemáticas Simples
// Crie variáveis para dois números e calcule a soma, subtração, multiplicação e divisão. Exiba os resultados no console.

const soma = () => {
  const número1 = 5
  const número2 = 7

  return número1 + número2
}

// Função de teste para verificar a saída da função 'soma'
function testeSoma() {
  // Armazena a saída esperada
  const saidaEsperada = 12;
  
  // Executa a função 'soma' e armazena o resultado
  const resultado = soma();

  // Verifica se a saída corresponde à saída esperada
  if (resultado === saidaEsperada) {
      console.log('Teste PASSOU');
  } else {
      console.log(`Teste FALHOU: Esperado ${saidaEsperada}, mas recebeu ${resultado}`);
  }
}

// Executa o teste
testeSoma();