// EXERCICIO | Fila de espera

let option = ""
let patient = ""
let queue = []

do{
    for (let i = 0; i < queue.length; i++) {
        patient += (i + 1) + "º " + queue[i] + "\n"
    }    

    option = prompt(
        "fila de espera:\n\n" +
        patient +
        "\nOpções:" +
        "\n\n1. Adicionar paciente" +
        "\n2. Consultar paciente" +
        "\n3. sair"
    )

    switch (option) {
        case "1":
            let newPatient = prompt("Qual é o nome do paciente?")
         queue.push(newPatient)
            break;
        case "2":
            let removedPatient = queue.shift()
            alert("Paciente " + removedPatient + " consultado.")
            break;
        case "3":
            alert("Encerrando...")
            break;
        default:
            alert("Opção inválida!")
            break;
    }

} while(option !== "3")