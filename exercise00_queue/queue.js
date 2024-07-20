// EXERCICIO | Fila de espera

let queue = [];
let option = "";

do{ 
    let patients = ""
    for(let i = 0; i < queue.length; i++){
        patients += (i + 1) + "o - " + queue[i] + "\n"
    }

    option = prompt("Lista de pacientes:\n" +
        patients + "\n" + "a) Adicionar paciente\n b) Consultar paciente\n c) Sair"
    )
    
    switch(option){
        case "a":
            let newPatient = prompt("Escreva o nome do novo paciente:")
            queue.push(newPatient)
            break
            case "b":
                let removedPatient = queue.shift()
                alert("Paciente " + removedPatient + " consultado.")
                break
                case "c":
                    alert("Encerrando...")
                    default:
                        alert("Opcao inavlida!")
    }

} while(option !== "c")

