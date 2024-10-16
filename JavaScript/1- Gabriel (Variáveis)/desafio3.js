// 3. Concatenar Strings
// Declare duas variáveis que armazenam strings e concatene-as em uma nova variável. Exiba o resultado.
const concatene = () => {
  const var1 = 'Gabriel'
  const var2 = 'Inteligente'

  const var3 = var1 + ' ' + var2

  return var3
}

// Função de teste para verificar a saída da função 'concatene'
function testeConcatene() {
  // Armazena a saída esperada
  const saidaEsperada = 'Gabriel Inteligente';
  
  // Executa a função 'concatene' e armazena o resultado
  const resultado = concatene();

  // Verifica se a saída corresponde à saída esperada
  if (resultado === saidaEsperada) {
      console.log('Teste PASSOU');
  } else {
      console.log(`Teste FALHOU: Esperado "${saidaEsperada}", mas recebeu "${resultado}"`);
  }
}

// Executa o teste
testeConcatene()