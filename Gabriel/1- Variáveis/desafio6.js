// 6. Operadores Lógicos:
// Use operadores lógicos (&&, ||, !) para combinar expressões e exibir o resultado.

const testeHard = () => {
  const variável1 = 5
  const variável2 = '5'
  const variável3 = false

  console.log(!(5 === false) || 5 === '5')
  console.log(!(5 === false) && 5 === '5')
}


// Função de teste para verificar a saída da função 'testeHard'
function testeOperadoresLogicos() {
  // Armazena a saída esperada
  const saidaEsperada = [
      true, false
  ];

  // Substitui o console.log por uma função de captura de saída
  const saidas = [];
  const originalConsoleLog = console.log;
  console.log = (...args) => saidas.push(...args);

  // Executa a função 'testeHard'
  testeHard();

  // Restaura o console.log original
  console.log = originalConsoleLog;

  // Verifica se a saída corresponde à saída esperada
  const resultado = saidas.every((valor, indice) => valor === saidaEsperada[indice]);
  console.log(`Teste ${resultado ? 'PASSOU' : 'FALHOU'}`);
}

// Executa o teste
testeOperadoresLogicos();
