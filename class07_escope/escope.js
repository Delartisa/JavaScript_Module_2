// Escopo | EXEMPLOS

let nivelDeEnsino = "ensino fundamental" // escopo mais externo

function subirNivelDeEnsino() {
 nivelDeEnsino = "ensino medio" // escopo mais interno (dentro de uma funcao)
}

// e as variaveis do escopo mais externas podem ser usadas em um escopo mais interno

console.log(nivelDeEnsino) // mostra a variavel inicial
subirNivelDeEnsino() // chama a funcao "subir nivel de ensino"
console.log(nivelDeEnsino) // variavel atualizada (subiu o nivel de ensino)

// agora, o contrario nao funciona (interno para externo)

function people() {
    let nome = "isa" // nao funciona, a variavel fica limitada a funcao em que esta
}

people()
console.log(nome) // variavel criada dentro de um escopo interno, impossibilitando seu uso fora da funcao