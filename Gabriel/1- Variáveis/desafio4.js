// Função verificação
const verificação = () => {
    const número = 1;
    const string = 'Olá';
    const boolean = true;
    const object = { nome: 'gabriel' };
    const define = undefined;
    
    console.log(número);
    console.log(typeof número);
    
    console.log(string);
    console.log(typeof string);
    
    console.log(boolean);
    console.log(typeof boolean);
    
    console.log(object);
    console.log(typeof object);
    
    console.log(define);
    console.log(typeof define);
};


// Função de teste para verificar a saída da função 'verificação'
function testeVerificação() {
  // Armazena a saída esperada
  const saidaEsperada = [
      1, 'number', 'Olá', 'string',
      true, 'boolean', { nome: 'gabriel' }, 'object',
      undefined, 'undefined'
  ];

  // Substitui o console.log por uma função de captura de saída
  const saidas = [];
  const originalConsoleLog = console.log;
  console.log = (...args) => saidas.push(...args);

  // Executa a função 'verificação'
  verificação();

  // Restaura o console.log original
  console.log = originalConsoleLog;

  // Verifica se a saída corresponde à saída esperada
  const resultado = saidas.every((valor, indice) => {
      if (typeof valor === 'object' && typeof saidaEsperada[indice] === 'object') {
          return JSON.stringify(valor) === JSON.stringify(saidaEsperada[indice]);
      }
      return valor === saidaEsperada[indice];
  });
  console.log(`Teste ${resultado ? 'PASSOU' : 'FALHOU'}`);
}

// Executa o teste
testeVerificação()