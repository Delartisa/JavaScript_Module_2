JavaScript - Module 2 | Data Structures and Functions

# Arrays

* Sintaxe
-> let array = [ ]

Os arrays são estruturas de dados que permitem armazenar elementos em forma de lista. Dentro desses arrays, podem ser armazenado todo tipo de dado, como strings, números, valores booleanos e até mesmo outros arrays.

Todo os elementos do array são identificados por um índice inteiro, que começa pelo 0.

*Vide exemplo: \class00_arrays\array.js | Exemplo 00

Casos de uso

O array é uma estrutura muito dinâmica, possuindo vários casos de uso, como:

1. Enfileirar e desenfileirar
2. Empilhar e desempilhar
3. Achar o índice de um valor
4. Cortar e concatenar
    
# Array na prática

1. Método PUSH (adiciona elementos no final do array)

Sintaxe:
nomeDoArray.push(<novoElemento>)

2. Método UNSHIFT (adiciona elementos no começo do array)

Sintaxe:
nomeDoArray.unshift(<novoElemento>)

3. Método POP (remove o último elemento do array)

Sintaxe:
Crie uma variável para armazenar o elemento removido e atribua a
"nomeDoArray.pop()".

4. Método SHIFT (remove o primeiro elemento do array)

Sintaxe:
Crie uma variável para armazenar o elemento removido e atribua a
"nomeDoArray.shift()".

5. Método INCLUDES (pesquisa por um elemento no array)

Sintaxe:
Crie uma variável para armazenar o valor booleano e atribua a
"nomeDoArray.includes(<nomeDoElemento>)".

6. Método INDEXOF (pesquisa por um elemento no array e retorna seu índice)

Sintaxe:
Crie uma variável para armazenar o valor numérico e atribua a
"nomeDoArray.indexOf(<nomeDoElemento>)".

7. Método SLICE (cria uma cópia de um pedaço do array)

Sintaxe:
Crie uma variável para armazenar os elementos e atribua a
"nomeDoArray.slice(<indiceInicial, indiceFinal>)".

Também é possível fazer esse corte do final para o começo do array, passando o primeiro parâmetro com um número negativo (o segundo parâmetro é opcional).

*OBS: O índice final não é contado, logo, se declarar (0, 4), o novo array só irá conter os elementos 0, 1, 2, 3.


8. Método CONCAT (concatenar arrays (também serve para itens))

Crie uma variável para armazenar o novo array e atribua a
"nomeDoArray.concat(<array, "item">)".

9. Método SPLICE (remover ou substituir elementos de um array)

Crie uma variável para armazenar os elementos removidos e atribua a
"nomeDoArray.splice(<indiceDoElemento, quantidade_de_elementos_que_vao_ser_removidos, elementosSubstitutos(opcional)>)".

*Vide exemplo class00_arrays/array.js - Exemplo 01

# Arrays Bidimensionais (matrizes)

Como falado anteriormente, o array permite outros arrays dentro de si, como no exemplo:

const matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

No caso, o array com os valores "1, 2, 3" está no índice 0 do array "matriz". Para referenciar um elemento dentro desses "subArrays", usamos:

matriz[0][0] // mostra o array com índice 0 | mostra o elemento com índice 0
retorna 1

*Vide exemplo class01_matrices/matrices.js - Exemplo 00

# Objetos

Estrutura do javascript para se trabalhar com dicionários chave-valor, que pode armazenar todo tipo de dado.

Sintaxe:
const objeto = {
    chave: valor, // par chave-valor, também chamado de propriedade
    //...
}

A propriedade é parecida com uma constante, sendo a chave o nome e o valor, o próprio valor que a chave recebe, como por exemplo:

const objeto = {
    nome: "isabelle",
    idade: "19"
}

Para executar um obj, use:

objeto.<nome_da_chave> ou objeto[<nome_da_chave>]

*OBS: Diferente do array, um objeto não armazena as variaveis em ordem.

*Vide exemplo class01_objects/objects.js - Exemplo 00

# Funções

Estrutura que permite declarar um procedimento e executá-lo com uma chamada. Tanto a entrada como a saída são opcionais, ou seja, pode existir uma função sem um deles ou ambos.

Sintaxe: 
function nomeDaFuncao(entradas) { // as entradas da função são chamadas de parâmetros
    // procedimentos...
    return (saída de dados)
}

Para chamar a função:

nomeDaFuncao()

# Parâmetros

Os parâmetros são como declarações de variáveis que ficam disponíveis dentro da função.

Podemos passar um parâmetro com um valor padrão, como por exemplo:

function entrada(name = "usuário"){
    alert("Bem vindo(a), " + name) // "Bem vindo(a), usuário"
}

*OBS: O valor padrão sempre deve ser declarado por último caso haja mais parametros a serem estabelecidos.

# Saída

A saída(return) é usada para retornarmos alguma variavel da função. Cada função possui apenas um retorno, a menos que haja ramificações, como no exemplo:

function maiorDeIdade(age) {
    if (age >= 18) {
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}

# Escopo

É o contexto onde a variável foi declarada, podendo ser mais exeterno ou mais interno. Uma variável declarada no escopo mais externo pode ser usada em um escopo mais interno, mas o contrário não é verdade.





