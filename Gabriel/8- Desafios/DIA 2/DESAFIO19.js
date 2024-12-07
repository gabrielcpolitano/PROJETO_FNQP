/* 
19. Calculadora simples
    Crie um programa que solicite dois números e um operador (+, -, *, /). Exiba o resultado da
    operação no console.
*/

function soma(valor1, valor2, operador){
  if(operador === `+`){
    return valor1 + valor2
  
  } else if(operador === `-`){
    return valor1 - valor2
  
  } else if(operador === `*`){
    return valor1 * valor2
  
  } else if(operador === `/`){
    return valor1 / valor2
  
  } else {
    return`somente ( + - * / )`
  }
}

console.log(soma(5,5,`+`))