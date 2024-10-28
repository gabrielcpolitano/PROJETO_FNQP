// 1. Verificação de Números Pares ou Ímpares
// Escreva um programa que recebe um número e imprime 'Par' se for par e 'Ímpar' se for ímpar.

function par(número) {
  if (número % 2 === 0){
    return 'Par'
  
  }else{
    return 'Impar'
  }
  
}

// Testes
console.log(par(2) === 'Par' ? "PASSOU" : "FALHOU");      // Teste para número par
console.log(par(3) === 'Impar' ? "PASSOU" : "FALHOU");    // Teste para número ímpar
console.log(par(0) === 'Par' ? "PASSOU" : "FALHOU");      // Teste para zero (par)
console.log(par(-4) === 'Par' ? "PASSOU" : "FALHOU");     // Teste para número negativo par
console.log(par(-5) === 'Impar' ? "PASSOU" : "FALHOU");   // Teste para número negativo ímpar