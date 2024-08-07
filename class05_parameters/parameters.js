// FUNCAO - PARAMETROS (entradas) | EXEMPLOS

function double(x) { // dentro das aspas, vamos declarar as "variaveis" que serao utilizadas na funcao
    alert("O dobro de " + x + " e " + (x * 2))
}

double(5) //  chamamos a funcao double e passamos um valor para a "variavel" x

// outro exemplo:

function salutation(name = "usuario") { // cria a funcao | torna o valor padrao de "name" como "usuario"
    alert("Bem vindo(a), " + name)
}

nome = prompt("Qual e o seu nome?")
if(nome === ""){  // caso o usuario deixe o campo em branco
    salutation() 
} else {
    salutation(nome) // caso o usuario preencha o campo
}

// podemos passar mais de um parametro 

function sum(x, y) {
    alert("A soma de " + x + " com " + y + " e igual a " + (x + y))
}

sum(5, 9)

// usando objetos dentro de funcoes

function createUser(nickname, email, password, tipe= "adm") { // para evitar bugs, parametros opcionais devem ser adicionados ao final
    let userData = { // objeto para armazenar os dados
        nickname, // como os nomes sao iguais, nao ha necessidade de escrever email: email, apenas coloque os devidos nomes
        email,
        password,
        tipe
    }
    console.log(userData) // mostra o objeto no console
}

createUser("isabelle", "isa@gmail.com", "1234") // entrada de dados (parametros)

// #IMPORTANTE: os dados inseridos acima precisam estar na respectiva ordem, caso contrario, os dados vao ficar desorganizados | todos os parametros precisam necessariamente serem preenchidos (a nao ser que a variavel ja tenha um valor pre definido, nesse caso e opcional)

// solucao para funcoes com varios parametros

function info(user) {
    user.nickname
    user.email 
    user.adress
}

const data = {
    nickname: "isa",
    email: "isa@gmail.com",
    adress: "st cruz",
}

console.log(data)





