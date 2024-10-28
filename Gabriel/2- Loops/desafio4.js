// Escreva um programa que recebe um número de 1 a 7 e imprime o dia da semana correspondente (1 = Domingo, 2 = Segunda, ..., 7 = Sábado).

function semana(dia){
  
  switch (dia){
  case 1:
    return 'Domingo'
  case 2:
    return 'Segunda'
  case 3:
    return 'Terça'
  case 4:
    return 'Quarta'
  case 5:
    return 'Quinta'
  case 6:
    return 'Sexta'
  case 7:
    return 'Sábado'
  
  default:
    return 'Entre 1 - 7'
  }
  

}


// Testes
console.log(semana(1) === 'Domingo' ? "Teste 1 passou" : "Teste 1 falhou");
console.log(semana(2) === 'Segunda' ? "Teste 2 passou" : "Teste 2 falhou");
console.log(semana(3) === 'Terça' ? "Teste 3 passou" : "Teste 3 falhou");
console.log(semana(4) === 'Quarta' ? "Teste 4 passou" : "Teste 4 falhou");
console.log(semana(5) === 'Quinta' ? "Teste 5 passou" : "Teste 5 falhou");
console.log(semana(6) === 'Sexta' ? "Teste 6 passou" : "Teste 6 falhou");
console.log(semana(7) === 'Sábado' ? "Teste 7 passou" : "Teste 7 falhou");
console.log(semana(8) === 'Entre 1 - 7' ? "Teste 8 passou" : "Teste 8 falhou");
console.log(semana(0) === 'Entre 1 - 7' ? "Teste 9 passou" : "Teste 9 falhou");