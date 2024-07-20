// ARRAYS - Parte 1

/*
1. e uma estrutura do javascript para se trabalhar com todo tipo de lista

2. Seus elementos são identificados por um índice inteiro começando pelo 0

3. Pode armazenar qualquer tipo de dado e ter qualquer tamanho

4. Pode ser criado e utilizado através de colchetes []
-> let array = [] ou let array = [1, 2, 3, 4]
-> array[0] = "ola" | o numero dentro dos colchetes equivale a posicao que voce deseja mostrar
-> array[1] = 42 


5. Possuem funções para vários casos de uso
5.1 enfileirar e desenfileirar
5.2 empilhar e desempilhar
5.3 achar o índice de um valor
5.4 cortar e concatenar
etc
*/


// Exemplos: 

// funcao push
const teste = ["one", "two", "three", "four", "five"]
console.log(teste)

teste.push("six", "seven") // insercao de dado ao final do array 
console.log(teste)

//funcao unshift
teste.unshift("zero") // insercao ao comeco do array
console.log(teste)

// funcao pop
const lastElement = teste.pop() // retira o ultimo elemento do array e o retorna
console.log(teste)
console.log(lastElement)

// funcao shift
let firstOutElement = teste.shift() // retira o primeiro elemento do array
console.log(firstOutElement)

// funcao includes
const doHave = teste.includes("two") // pesquisa por um elemento
console.log(doHave)

// funcao indexOf
const index = teste.indexOf("two") // pesquisa por um elemento e retorna o indice dele
console.log(index)

// funcao slice
const slice = teste.slice(0, 4) // faz uma copia de uma parte do array | o ultimo indice indicado nos parenteses nao e contado
console.log(slice)

// a contagem tambem pode ser feita ao contrario
const invertedSlice = teste.slice(-4)
console.log(invertedSlice)