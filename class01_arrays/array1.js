// ARRAYS - Parte 2

// funcao concat 
const array1 = ["zero", "one", "two", "three", "four"]
const array2 = ["five", "six", "seven", "eight", "nine"]

const all = array1.concat(array2) // concatena arrays, numeros, strings
console.log(all)

// funcao splice | inicio - quantidade de itens que deseja remover - substituto do ou dos itens removidos

const removedElements = all.splice(2, 1, "dois") // remove um ou mais elementos de um array e ele pode ser substituido por outro
console.log(removedElements)

// iteracao sobre elementos
for(let indice = 0; indice < all.length; indice++){
    alert("Elemento " + indice + ": " + all[indice])
}

