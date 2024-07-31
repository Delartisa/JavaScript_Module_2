// ARRAYS - Exemplos

// Exemplo 00
let array = ["banana", "maçã", "morango"] // inicializando o array

array[0] // desse modo, você faz referência a "posição" de um elemento do array, que no caso, é o elemento "banana", no índice 0
array[1] //  elemento "maçã", no índice 1
array[2] // elemento "morango", no índice 2

//Também é possível atribuir um valor para um índice específico usando o método acima.

array[3] = "kiwi"

console.log(array) // array = ["banana", "maçã", "morango", "kiwi"]
    



















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