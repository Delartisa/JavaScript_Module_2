// FUNCOES ANONIMAS

function somar(a, b) { 
    return a + b
}

/* ao criar uma funcao, voce pode atribuir o resultado a uma variavel, como o exemplo abaixo:

const operacao = somar()

mas tambem e possivel armazenar as funcoes em si em variaveis, como por exemplo:
*/

let operacao = somar // ao criar uma variavel e atribui-la a uma funcao sem os parenteses, voce armazena a funcao dentro de uma variavel.

console.log(operacao(2, 2)) // logo, a nova variavel se "torna" uma funcao, podendo passar parametros, como visto acima

/* Podemos criar uma variavel e atribuir uma funcao qualquer sem a necessidade de nomear a funcao, como por exemplo:

let subtrair = function (a, b){
    return a - b
}

console.log(subtrair(2, 2)) | assim, criamos uma variavel/funcao que nos permite fazer a subtracao de dois numeros
*/

// Trabalhando com variaveis, tambem podemos atribuir outras funcoes a ela, como no exemplo:

operacao = function (a, b){
    return a - b
}

console.log(operacao(2, 2)) // ao atribuir uma nova funcao (subtrair), agora a variavel "operacao" subtrai os numeros

// OBS: Ao criar uma funcao, nao ha necessidade de se preocupar com sua posicao no codigo, pois ao rodar o codigo, ela se comporta como se estivesse no topo do codigo. o mesmo nao vale para funcoes dentro de variaveis, entao, e necessario criar a variavel no topo, para quando chama-la, tudo funcionar corretamente