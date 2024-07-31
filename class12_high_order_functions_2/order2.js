// HIGH ORDER FUNCTIONS - 2

const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]

// map - criar um novo array baseado no array principal

// comportamento padrao

// const nomes =  []

// for (let i = 0; i < personagens.length; i++) {
//     nomes.push(personagens[i].nome) // push para inserir os dados no array "nomes" | personagens[i] para percorrer | .nome para  selecionar a categoria desejada
// }
 

// uso do map 

const nomes = personagens.map(function (personagens) { //  map procura
    return personagens.nome
})

console.log(nomes)

// filter - selecionar elementos especificos de um array

// const orcs = []

// for (let i = 0; i < personagens.length; i++) {  // contador
//     if (personagens[i].raca === "Orc"){ // se personagens[0]/raca for  === "Orc", faca
//         orcs.push(personagens[i]) //  mande esses  elementos (push)  para o array orcs
//     }
// }


// filter
const orcs =  personagens.filter(function (personagem) {  //  declara a funcao e seu parametro
    return personagem.raca === "Orc"  //  retorna | se personagem/raca ===  "Orc", mostra os elementos iguais a Orc
})

console.log(orcs)

//  reduce - transformar o array em outro valor

// const niveis  =  personagens.map(function (totalNiveis)  {
//     return  totalNiveis.nivel
// })

//  console.log(niveis)

//  reduce

const nivelTotal =  personagens.reduce(function (valorAcumulado,  personagem) {  //  valor acumulado =  iteracao  anterior
    return valorAcumulado +  personagem.nivel
}, 0) // o segundo parametro do reduce eh o valor inicial do parametro "valorAcumulado"

console.log(nivelTotal)


const racas = personagens.reduce(function (valorAcumulado, personagem) {
    
})












