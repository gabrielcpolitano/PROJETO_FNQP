// 8. Operador Ternário:
// Use o operador ternário para definir uma variável baseada em uma condição

function verifica(){
  const checkName = true

  checkName ? console.log('Gabriel') : console.log('Sem Nome')
}


// Função de teste para verificar a saída da função 'verifica'
function testeOperadorTernário() {
  // Armazena a saída esperada
  const saidaEsperada = 'Gabriel';

  // Substitui o console.log por uma função de captura de saída
  const saidas = [];
  const originalConsoleLog = console.log;
  console.log = (...args) => saidas.push(...args);

  // Executa a função 'verifica'
  verifica();

  // Restaura o console.log original
  console.log = originalConsoleLog;

  // Verifica se a saída corresponde à saída esperada
  const resultado = saidas[0] === saidaEsperada;
  console.log(`Teste ${resultado ? 'PASSOU' : 'FALHOU'}`);
}

// Executa o teste
testeOperadorTernário();
