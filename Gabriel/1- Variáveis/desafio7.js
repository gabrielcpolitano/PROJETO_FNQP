// 7. Conversão de Tipos:
// Converta uma string numérica em número e faça uma operação matemática. Exiba o resultado

function stringToNumber(){
  const number1 = '5'
  const number2 = '7'

  console.log(number1 + number2)
  console.log(parseInt(number1) + parseInt(number2))

}

stringToNumber()


// Função de teste para verificar a saída da função 'stringToNumber'
function testeStringToNumber() {
  // Armazena a saída esperada
  const saidaEsperada = ['57', 12];

  // Substitui o console.log por uma função de captura de saída
  const saidas = [];
  const originalConsoleLog = console.log;
  console.log = (...args) => saidas.push(...args);

  // Executa a função 'stringToNumber'
  stringToNumber();

  // Restaura o console.log original
  console.log = originalConsoleLog;

  // Verifica se a saída corresponde à saída esperada
  const resultado = saidas.every((valor, indice) => valor === saidaEsperada[indice]);
  console.log(`Teste ${resultado ? 'PASSOU' : 'FALHOU'}`);
}

// Executa o teste
testeStringToNumber();
