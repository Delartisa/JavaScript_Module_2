do {
    let option = ""
    option = prompt(
        "Escolha a opcao desejada:" +
        "\n\n1.Listar vagas disponiveis" +
        "\n2. Criar uma nova vaga" +
        "\n3. Visualizar uma vaga" +
        "\n4. Inscrever um candidato em uma vaga" +
        "\n5. Excluir uma vaga" +
        "\n6. Sair"
    )

    switch(option){
        case "1":
            break
            case "2":
                break
                case "3":
                    break
                    case "4":
                        break
                        case "5":
                            break
                            case "6":
                                break
                                default:
                                    break
    }

} while (option !== "6")

//------------------------functions------------------------------

function listarVagas() {

}

//-------------------------------

function criarVaga(nome, descricao, data_limite) {
    let vaga = {
        nome,
        descricao,
        data_limite
    }
    return vaga // inserir confirm
}

//-------------------------------

function visualizarVaga() {
    
}

//-------------------------------

function inscricaoVaga() {
    
}

//-------------------------------

function excluirVaga() {
    
}

//-------------------------------
