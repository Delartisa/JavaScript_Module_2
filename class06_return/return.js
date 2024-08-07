// RETURN - permite trabalhar com valores fora da funcao | EXEMPLOS

function averageCalculator (a, b, c) { // estabelecer parametros
    let average = (a + b + c) / 3 // criar variavel para receber o calculo
    return average // retorna variavel
}

const results = averageCalculator(2, 4, 6) // passa os valores dos parametros e armazena em uma variavel

console.log(results) // mostra o resultado da funcao

// =================================================================

function product(name, price, model) {
    const info = {
        name,
        price,
        model
    }
    return info
}

// e ao inves de fazer isso:

const notebook = product("Acer i7", "2.700", "2023")
console.log(notebook)

// faca isso:

console.log(product("Acer i7", 2.700, "2023"))

// ==================================================================

// return tambem pode retornar outras coisas alem de variaveis
function areaRetangular(base, altura) {
    return base * altura
}

console.log(areaRetangular(5, 10))

