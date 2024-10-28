// Escreva um programa que verifica se um número é positivo, negativo ou zero.

function positivo(número){
  if (número > 0){
    return 'positivo'
  
  } else if (número < 0){
    return 'negativo'
  
  } else{
    return 'neutro'
  }
}

// Testes
console.log(positivo(10) === 'positivo' ? "PASSOU" : "FALHOU");  // Teste para número positivo
console.log(positivo(-5) === 'negativo' ? "PASSOU" : "FALHOU");  // Teste para número negativo
console.log(positivo(0) === 'neutro' ? "PASSOU" : "FALHOU");     // Teste para zero
console.log(positivo(100) === 'positivo' ? "PASSOU" : "FALHOU"); // Teste para número grande positivo
console.log(positivo(-50) === 'negativo' ? "PASSOU" : "FALHOU"); // Teste para número grande negativo