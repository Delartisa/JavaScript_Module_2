// ARRAYS BIDIMENSIONAIS

// dentro de um array, podemos criar outros arrays, como no exemplo abaixo:
const matriz = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]]
//console.log(matriz)

/*
o array "matriz" tem os elementos (1, 2, 3) na posicao 0
o array "matriz" tem os elementos (4, 5, 6) na posicao 1
o array "matriz" tem os elementos (7, 8, 9) na posicao 2
*/

// para referenciar um elemento especifico do array, use os []

// exemplo:

console.log(matriz[1]) // aqui, vai ser mostrado o array da posicao 1 no console

// ou

console.log(matriz[1][0]) // aqui, vai ser mostrado a posicao 0 do array 1


const outraMatriz = [["1",["1", "2", "3"]], ["2",["4", "5", "6"]], ["3",["7", "8", "9"]]]

console.log(outraMatriz[0][1][2]) // aqui, vai ser mostrado a posicao 2, array 1, array 0

console.table(matriz) // o uso do table gera, quando possivel, uma tabela

// para inserir uma nova coluna na linha 0

matriz[0].push("new table")
console.table(matriz)

const matrizSimples = ["1", "2", "3", "4", "5"]

for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){ // a matriz[i] serve para arrays dentro de arrays
        const elementos = matriz[i][j] // constante para armazenar os valores da matriz
        console.log("Posicao: \n\n Coluna " + i + " | Linha " + j + "\n" + elementos) // mensagem formatada
    }
}

