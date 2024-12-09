/* 
19. Calculadora simples
    Crie um programa que solicite dois números e um operador (+, -, *, /). Exiba o resultado da
    operação no console.
*/

function calculadora(num1, num2, operador) {
  if(operador == `+`){
    return num1 + num2
  
  } else if(operador == `-`) {
    return num1 - num2
  
  } else if(operador == `*`) {
    return num1 * num2

  } else if(operador == `/`) {
    return num1 / num2

  } else {
    return `somente (+, -, *, /)`
  }
  
}

console.log(calculadora(5, 7, `+`))