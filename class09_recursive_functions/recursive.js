// Funcao recursiva | funcao que "se chama" (looping)

function dividir(num) { // cria uma funcao chamada de "dividir"
    console.log(num) // mostra os numeros no console
    if (num % 2 === 0){ // cria uma condicao, onde ela ira se repetir ate que se torne falsa
        dividir(num / 2) // chama a funcao | importante se atentar que nessa chamada, a divisao por dois age como um limitador da funcao, impedindo que vire um loop eterno. entao, e importante lembrar que, ao chamar um funcao dentro da funcao, os parametros precisam ter algo que quebre o loop em algum momento 
    } else { 
        return num // quando a condicao se tornar falsa, ela caira no else, onde o "looping" acaba
    }
}

// dividir(80) // chama a funcao "dividir" e passa o valor do parametro

// aplicacao | fatorial (!)

function fatorial(num) {
    console.log("Numero: " + num) // mostra o numero que esta sendo multiplicado
    if(num === 0){ // caso base, ja que 0! e igual a 1
        return 1
    } else if (num === 1){ // mesma resposta do if  
        return 1
    }  else {
        console.log(num + " * !" + (num - 1)) // mostra a operacao 
        return num * fatorial(num - 1) // caso "num" nao seja 0 nem 1, ele vai realizar a operacao | num(parametro passado abaixo) multiplicado pela funcao (num(parametro) - 1) 
    }
}

console.log("Resultado: ", fatorial(5)) // mostra o resultado da operacao

/*
5!
5 * !4
5 * 4 * !3
5 * 4 * 3 * !2
5 * 4 * 3 * 2 * !1 = 120
*/