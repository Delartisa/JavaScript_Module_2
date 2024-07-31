// OBJETOS | estrutura do js para trabalhar com dicionarios chave-valor

/*
Sintaxe:

const objeto = { // as chaves sao o que transformam uma variável em um objeto
chave1: propriedade1,
chave2: propriedade2
} 

# OBS1: os elementos de um obj podem ser numeros, booleanos ou strings
# OBS2: diferente do array, um objeto não armazena as variaveis em ordem

Para executar um obj, use:

objeto.<nome da chave>
*/

// exemplo:

const objeto = {
    name: "isabelle"
}

console.log(objeto.name) // mostra o valor da chave "name"
console.log(objeto) // mostra o objeto, chaves e suas respectivas propriedades

// podemos declarar chaves e propriedades de outra forma, como no exemplo abaixo:

const pessoa = {}

pessoa.nickname = "davizinho" // chave - propriedade, respectivamente
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