// Calculadora geometrica

let base = 0
let altura = 0
let lado = 0
let baseMenor = 0
let baseMaior = 0
let raio = 0
let option = ""

alert("Seja bem-vindo a calculadora geometrica inteligente!")

do{
    option = prompt("Escolha a opção desejada:\n\na) Calcular triangulo\nb) Calculador retangulo\nc) Calcular quadrado\nd) Calcular trapezio\ne) Calcular circulo\nf) Sair")

    switch(option){
        case "a":
            base = prompt("Qual é o valor da base?")
            altura = prompt("Qual é o valor da altura?")
            alert("A área do triangulo é: " + areaTriangulo(base, altura) + "m2")
            break
            case "b":
                base = prompt("Qual é o valor da base?")
                altura = prompt("Qual é o valor da altura?")
                alert("A area do retangulo é: " + areaRetangulo(base, altura) + "m2")
                break
                case "c":
                    lado = prompt("Qual é o valor do lado?")
                    alert("A area do quadrado é: " + areaQuadrado(lado) + "m2")
                    break
                    case "d":
                        baseMaior = prompt("Qual é o valor da base maior?")
                        baseMenor = prompt("Qual é o valor da base menor?")
                        altura = prompt("Qual é o valor da altura?")
                        alert("A area do trapezio é: " + areaTrapezio(baseMaior, baseMenor, altura) + "m2")
                        break
                        case "e":
                            raio = prompt("Qual é o valor do raio?")
                            alert("A area do circulo é: " + areaCirculo(raio) + "m2")
                            break
                            case "f":
                                alert("Encerrando...")
                                break
                                default:
                                    alert("Opção invalida!")
                                    break
    }

} while(option !== "f")

function areaTriangulo(a, b) {
    let calculoTriangulo = (a * b) / 2
    return calculoTriangulo
}

function areaRetangulo(a, b) {
    let calculoRetangulo = a * b
    return calculoRetangulo
}

function areaQuadrado(a) {
    let calculoQuadrado = a * a
    return calculoQuadrado 
}

function areaTrapezio(a, b, c){
    let calculoTrapezio = ((a + b) * c) / 2
    return calculoTrapezio
}

function areaCirculo(a){
    let calculoCirculo = 3.14 * (a*a)
    return calculoCirculo
}