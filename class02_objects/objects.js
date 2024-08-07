// OBJETOS | EXEMPLOS
// Exemplo 00
const objeto = {
    name: "isabelle"
}

console.log(objeto.name) // mostra o valor da chave "name"
console.log(objeto) // mostra o objeto, chaves e suas respectivas propriedades

// podemos declarar chaves e propriedades de outra forma, como no exemplo abaixo:

const pessoa = {}

pessoa.nickname = "david" // chave - propriedade, respectivamente
pessoa.age = "19"
pessoa.friends = ["isa", "natan", "kayke"] // o obj permite arrays
pessoa.localization = {
    adress: "rua brigadeiro de melo",
    num: "casa 12"
} // obj tambem permite outro obj
console.log(pessoa)

// verifica se as propriedades sao iguais

console.log(objeto.name === objeto["name"])
// ou
console.log(objeto.name === objeto["nam" + "e"])