//Imprimir Números Pares de 1 a 20(For Loop)
// Escreva um loop que imprime apenas os números pares entre 1 e 20

function ImprimePares() {
    for (let i = 1; i <= 20; i++)
        if (i%2===0)
            console.log(`numero par: `, i);
}

ImprimePares();