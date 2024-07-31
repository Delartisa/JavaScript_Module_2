// Geometric Calculator

function areaTriangulo() { // define triangle area
    let base = parseFloat(prompt("Qual é o valor da base?")) // create variable to store the value
    let altura = parseFloat(prompt("Qual é o valor da altura?")) 
    return base * altura / 2 // return the result
}

function areaRetangulo() {
    let base = parseFloat(prompt("Qual é o valor da base?"))
    let altura = parseFloat(prompt("Qual é o valor da altura?"))
    return base * altura
}

function areaQuadrado() {
    let lado = parseFloat(prompt("Qual é o valor do lado?"))
    return lado * lado
}

function areaTrapezio() {
    let baseMaior = parseFloat(prompt("Qual é o valor da base maior?"))
    let baseMenor = parseFloat(prompt("Qual é o valor da base menor?"))
    let altura = parseFloat(prompt("Qual é o valor da altura?"))
    return (baseMaior + baseMenor) * altura / 2
}

function areaCirculo() {
    let raio = parseFloat(prompt("Qual é o valor do raio?"))
    return 3.14 * (raio * raio)
}

function menu() { // create a new function to show the menu
    return prompt("Calculadora Geométrica" +
    "\n\nEscolha a forma geométrica que desejar calcular a área:" +
    "\n1. Triângulo" +
    "\n2. Retângulo" +
    "\n3. Quadrado" +
    "\n4. Trapézio" +
    "\n5. Círculo" +
    "\n6. Sair\n")
}

function execute() { // function to execute the program
    let option = "" // define option as a string

    do{
        option = menu() // call the function "menu" and
        let result

        switch(option){
            case "1":
                result = areaTriangulo()
                break
            case "2":
                result = areaRetangulo()
                break
            case "3":
                result = areaQuadrado()
                break
            case "4":
                result = areaTrapezio()
                break
            case "5":
                result = areaCirculo()
                break
            case "6":
                alert("Encerrando...")
                break
            default:
                alert("Opção inválida!")
                break
        }
        if(result) {
            alert("Valor da área: " + result)
        }
    } while (option !== "6")
}

execute()