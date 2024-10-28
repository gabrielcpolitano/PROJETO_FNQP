//Crie  um  programa  que  converte  uma  nota  (0  a  100)  para  conceitos  de  acordo  com  a  tabela:  A (90-100), B (80-89), C (70-79), D (60-69) e F (0-59).

function nota(nota){
  if(nota >= 90 && nota <= 100){
    return 'A'
  
  }else if(nota >= 80 && nota <= 89){
    return 'B'
  
  }else if(nota >= 70 && nota <= 79){
    return 'C'
  
  }else if(nota >= 60 && nota <= 69){
    return 'D'
  
  }else if(nota >= 0 && nota <= 59){
    return 'F'
  }
  else{
    return '0 - 100'
  }
}

// Testes
console.log(nota(95) === 'A' ? "PASSOU" : "FALHOU");      // Nota no intervalo A
console.log(nota(85) === 'B' ? "PASSOU" : "FALHOU");      // Nota no intervalo B
console.log(nota(75) === 'C' ? "PASSOU" : "FALHOU");      // Nota no intervalo C
console.log(nota(65) === 'D' ? "PASSOU" : "FALHOU");      // Nota no intervalo D
console.log(nota(50) === 'F' ? "PASSOU" : "FALHOU");      // Nota no intervalo F
console.log(nota(101) === '0 - 100' ? "PASSOU" : "FALHOU");  // Nota fora do intervalo
console.log(nota(-5) === '0 - 100' ? "PASSOU" : "FALHOU");   // Nota fora do intervalo
