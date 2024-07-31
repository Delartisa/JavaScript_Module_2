// HIGH ORDER FUNCTION - 1 | funcao que recebe outra funcao como parametro

// operacao() -> chamada da funcao, resultado
// operaccao -> funcao em si

function calcular(a, b, operacao) { // uma funcao nos parametros | a funncao calcular e chamada de high order function
    console.log("Realizando uma operacao")
    const resultado = operacao(a, b) // chamada da funcao | a insercao dessa funcao em outra funcao permite um grande dinamismo, ja ela  pode se tornnar qualquer outra funcao
    return resultado
}


function somar(x, y) {
    console.log("Realizando uma soma")
    return x + y
}

console.log(calcular(3, 5, somar)) //  essa declaracao de parametros, o 3 parametro "operacao" se torna o parametro "somar"

console.log(calcular(8, 4, function(x, y) {
    console.log("realizando uma subtracao")
    return x - y
})) // tambem  podemos usar as funcoes anonimas nesse caso

function showElements(elemento, indice, array) { // criando um obj para mostrar os itens
    console.log({
        elemento,
        indice,
        array
    })
}

const lista = ["maca", "banana", "laranja", "limao"] // ccrianddo array para armazenar os itens

for (let i = 0; i < lista.length; i++){ // i = 0 | i < 3 | i++
    showElements(lista[i], i, lista) // lista[0], lista[1].. | 0, 1.. |  lista = (maca, banana, laranja, limao)
}

// metodos dos arrays

lista.forEach(showElements) // usamos o forEach para ccontar  cada item do array e simplificar o codigo

lista.forEach(function (elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array
    })
}

)