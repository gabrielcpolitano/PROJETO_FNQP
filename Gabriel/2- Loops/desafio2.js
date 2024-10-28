// Escreva  um  programa  que  recebe  a  idade  de  uma  pessoa  e  imprime  se  ela  é  maior  ou  menor  de  idade (18 anos).

function maior(idade) {
  if (idade >= 18){
    return 'maior de idade'
  
  }else{
    return 'menor de idade'
  } 
  
}

// Testes
console.log(maior(18) === 'maior de idade' ? "PASSOU" : "FALHOU");     // Teste para idade 18 (maior de idade)
console.log(maior(17) === 'menor de idade' ? "PASSOU" : "FALHOU");     // Teste para idade 17 (menor de idade)
console.log(maior(21) === 'maior de idade' ? "PASSOU" : "FALHOU");     // Teste para idade 21 (maior de idade)
console.log(maior(16) === 'menor de idade' ? "PASSOU" : "FALHOU");     // Teste para idade 16 (menor de idade)
console.log(maior(0) === 'menor de idade' ? "PASSOU" : "FALHOU");      // Teste para idade 0 (menor de idade)