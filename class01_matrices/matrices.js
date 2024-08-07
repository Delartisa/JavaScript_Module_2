// ARRAYS BIDIMENSIONAIS - EXEMPLOS

// Exemplo 00
const matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

console.log(matriz[1]) // aqui, vai ser mostrado o array do índice 1 no console, no caso, "4, 5, 6".

console.log(matriz[1][0]) // aqui, vai ser mostrado o índice 0 do array 1, no caso, "4".

// Exemplo 01
const outraMatriz = [["1",["1", "2", "3"]], ["2",["4", "5", "6"]], ["3",["7", "8", "9"]]]

console.log(outraMatriz[0][1][2]) // aqui, vai ser mostrado a posicao 2, array 1, array 0, no caso, "3".

console.table(matriz) // o uso do table gera, quando possivel, uma tabela

// para inserir uma nova coluna na linha 0
matriz[0].push("new table")
console.table(matriz)

// Estrutura de repetição para mostrar os elementos da matriz
for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){ // a matriz[i] serve para arrays dentro de arrays
        const elementos = matriz[i][j] // constante para armazenar os valores da matriz
        console.log("Posicao: \n\n Coluna " + i + " | Linha " + j + "\n" + elementos) // mensagem formatada
    }
}

