// METODOS | EXEMPLOS

// * O console é um objeto, mas console.log e uma funcao,  pois o "log" e como uma funcao dentro do console, essas funcoes dentro de objs sao nomeadas de métodos.

let pessoa = {
    nome: "isabelle",
    idade: "19",
    saudacao() { // em metodos, nao usamos o "function" para criar uma funcao, basta escrever seu nome e seguir com a sintaxe
        console.log("ola, mundo! meu nome e " + this.nome) // usamos o "this" para referenciar um item dentro do obj
    }
}

console.log(pessoa) // para mostrar os itens do obj
pessoa.saudacao() // para mostrar o conteudo da funcao