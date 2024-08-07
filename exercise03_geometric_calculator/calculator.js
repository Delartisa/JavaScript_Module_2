// EXERCÍCIO | Calculadora geométrica

function calcularAreaTriangulo(){
    let base = parseFloat(prompt("Infome o valor da base:"))
    let altura = parseFloat(prompt("Informe o valor da altura:"))
    let areaTriangulo = (base * altura) / 2
    return alert("A área do triângulo é de " + areaTriangulo + " m2.")
}

function calcularAreaRetangulo(){
    let base = parseFloat(prompt("Infome o valor da base:"))
    let altura = parseFloat(prompt("Informe o valor da altura:"))
    let areaRetangulo = base * altura
    return alert("A área do triângulo é de " + areaRetangulo + " m2.")
}

function calcularAreaQuadrado(){
    let lado = parseFloat(prompt("Infome o valor do lado:"))
    let areaQuadrado = lado * lado
    return alert("A área do quadrado é de " + areaQuadrado + " m2.")
}

function calcularAreaTrapezio(){
    let baseMaior = parseFloat(prompt("Informe o valor da base maior:"))
    let baseMenor = parseFloat(prompt("Informe o valor da base menor:"))
    let altura = parseFloat(prompt("Informe o valor da altura:"))
    let areaTrapezio = ((baseMaior + baseMenor) * altura) / 2
    return alert("A área do trapézio é de " + areaTrapezio + " m2.") 
}

function calcularAreaCirculo (){
    let raio = parseFloat(prompt("Informe o valor do raio:"))
    let areaCirculo = 3.14 * (raio * raio)
    return alert("A área do círculo é de " + areaCirculo + " m2.") 
}

function executar(){
    let option = ""
    do { option = prompt("---Calculadora geométrica---" +
    "\nEscolha a forma geométrica que deseja calcular:" +
    "\n\n1. Triângulo" +
    "\n2. Retângulo" +
    "\n3. Quadrado" +
    "\n4. Trapézio" +
    "\n5. Círculo" +
    "\n\nx. Encerrar programa"
    )

    switch (option) {
        case "1":
            calcularAreaTriangulo()
            break;
        case "2":
            calcularAreaRetangulo()
            break;
        case "3":
            calcularAreaQuadrado()
            break;
        case "4":
            calcularAreaTrapezio()
            break;
        case "5":
            calcularAreaCirculo()
            break;
        case "x":
            alert("Encerrando...")
            break;
        default:
            alert("Opção inválida!")
            break;
    }
    

    } while (option !== "x")
}

executar()