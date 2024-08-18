const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]

// METODO MAP

// const nomes = []  // cria uma variavel para armazenar os nomes do array "personagens"

// for (let i = 0; i < personagens.length; i++){
//     nomes.push(personagens[i].nome) // coleta e adiciona o conteudo de  todas as chaves chamadas "nome"
// }

// console.log(nomes)

const nomes = personagens.map(function(personagem){ // inicializa um  parametro para armazenar(array) o nome de cada personagem
    return personagem.nome  // retorna um novo array com os nomes dos personagens
})

console.log(nomes)

// METODO FILTER

// const orcs = []

// for (let i = 0; i < personagens.length; i++) {
//    if (personagens[i].raca === "Orc"){
//     orcs.push(personagens[i])
//    }
// }

// console.log(orcs)

const orcs = personagens.filter(function(racaOrc) { // inicializa um parametro para armazenar(array)
    return racaOrc.raca ===  "Orc"  //  filtra os personagens da raca  "orc"
})

console.log(orcs) 

// METODO REDUCE

// let totalNivel = 0

// for (let i = 0; i < personagens.length; i++) {
//     totalNivel += personagens[i].nivel
// }

// console.log(totalNivel)

const nivelTotal =  personagens.reduce(function(valorAcumulado, niveis){ // o return possui  um esquema de acumulo, entao seu primeiro parametro e um valor acumulado e o segundo parametro e o seu valor inicial
   return valorAcumulado +  niveis.nivel // retorna o valor acumulado total (niveis)
}, 0)

console.log(nivelTotal)

//  outro exemplo: transformando um array em obj

const racas = personagens.reduce(function(valorAcumulado, personagem){
    if(valorAcumulado[personagem.raca]){  // verificacao se o tipo de raca a existe
        valorAcumulado[personagem.raca].push(personagem) // se sim, adiciona ao personagem
    } else{
        valorAcumulado[personagem.raca] = [personagem] // caso nao exista, atribuie a um array
    }
    return valorAcumulado
}, {}) // inicializar o valor acumulado como um obj

console.log(racas)