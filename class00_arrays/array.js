// ARRAYS - EXEMPLOS

// Exemplo 00
let array = ["banana", "maçã", "morango"] // inicializando o array

array[0] // desse modo, você faz referência a "posição" de um elemento do array, que no caso, é o elemento "banana", no índice 0
array[1] //  elemento "maçã", no índice 1
array[2] // elemento "morango", no índice 2

//Também é possível atribuir um valor para um índice específico usando o método acima.

array[3] = "kiwi"

console.log(array) // array = ["banana", "maçã", "morango", "kiwi"]
    
//=====================================================================

// Exemplo 01 - Função PUSH
const numbers = ["one", "two", "three", "four", "five"]
console.log(numbers)

numbers.push("six", "seven") // insercao de dado ao final do array 
console.log(numbers)

// Exemplo 01 - Função UNSHIFT
numbers.unshift("zero") // insercao ao comeco do array
console.log(numbers)

// Exemplo 01 - Função POP
const lastElement = numbers.pop() // retira o ultimo elemento do array
console.log(numbers)
console.log(lastElement) // retorna o elemento retirado

// Exemplo 01 - Função SHIFT
let firstOutElement = numbers.shift() // retira o primeiro elemento do array
console.log(firstOutElement)

// Exemplo 01 - Função INCLUDES
const doHave = numbers.includes("two") // pesquisa por um elemento
console.log(doHave)

// Exemplo 01 - Função INDEXOF
const index = numbers.indexOf("two") // pesquisa por um elemento e retorna o indice dele
console.log(index)

// Exemplo 01 - Função SLICE
const slice = numbers.slice(0, 4) // faz uma copia de uma parte do array | o ultimo indice indicado nos parenteses nao e contado
console.log(slice)

// a contagem tambem pode ser feita ao contrario
const invertedSlice = numbers.slice(-4)
console.log(invertedSlice)

// Exemplo 01 - Função CONCAT
const array1 = ["zero", "one", "two", "three", "four"]
const array2 = ["five", "six", "seven", "eight", "nine"]

const all = array1.concat(array2) // concatena arrays, numeros, strings
console.log(all)

// Exemplo 01 - Função SPLICE
const removedElements = all.splice(2, 1, "dois") // remove um ou mais elementos de um array e ele pode ser substituido por outro
console.log(removedElements)

// iteracao sobre elementos
for(let indice = 0; indice < all.length; indice++){
    alert("Elemento " + indice + ": " + all[indice])
}

