//  HIGH-ORDER FUNCTIONS | EXEMPLOS

// Exemplo 00
function calculo(x, y, operacao){ // inicialize a função com dois parametros quaisquer e o parametro dinâmico "operacao"
    let resultadoDaOperacao = operacao(x, y) // crie uma variável para armazenar o resultado da função
    return resultadoDaOperacao // retorne apenas o resultado
}

function somar(x, y){ // crie outras funções com diferentes propósitos
return x + y
}

function subtrair(x, y){
return x - y
}

function multiplicar(x, y){
return x * y
}

console.log(calculo(5, 5, multiplicar)) // passe os valores que escolher e no final, a operação que deseja realizar. Nesse caso, o terceiro parâmetro vai substituir a função "operação", possibilitando torna-lá qualquer outra função.

// também é possível criar uma função nos próprios parametros de entrada, como por exemplo:

console.log(calculo(5, 5, function(x,y) {
    return x / y // criamos uma funcao anônima para realizar a divisão
}))


// Exemplo 01 - criando uma estrutura de repetição para contar elementos de um array
function exibirElemento(elemento, indice, array){ // estabelecendo parâmetros
    console.log({ // formatando a saída de dados
        elemento,
        indice,
        array
    })
}

let lista = ["zero", "um", "dois", "três"]

for (let i = 0; i < lista.length; i++) { // criando a estrutura de repetição para mostrar os elementos
    exibirElemento(lista[i], i, lista)
}

// forEach - Usado com arrays | para cada item de um array, ele mostra o elemento(string), índice(número) e o próprio array
lista.forEach(exibirElemento)  

// * também é possível simplificar usando as funções anônimas, dessa forma:

lista.forEach(function (item, posicao, grupo){
 console.log({
    item,
    posicao,
    grupo
 })   
})

