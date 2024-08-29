const vagas = []

function listarVagas() {
    const vagasEmTexto = vagas.reduce(function (textoAcumulado, vaga, indice) {
        // 1. nomeDaVaga, candidatosInscritos: n
        textoAcumulado += indice + ". "
        textoAcumulado += vaga.nome + "\n" 
        textoAcumulado += "Candidatos inscritos: " + vaga.candidatos.length + "\n\n"
        return textoAcumulado
    }, "")

    alert(vagasEmTexto)
}

function criarVaga() {
    const nome = prompt("Informe o nome da vaga:")
    const descricao = prompt("Escreva uma descrição para a vaga:")
    const dataLimite = prompt("Informe uma data limite (dd/mm/aaaa)")

    const confirmacao = confirm(
        "Você está criando uma nova vaga com as seguintes informações:" +
        "\n\nNome da vaga: " + nome +
        "\nDescrição da vaga: " + descricao +
        "\nData limite da vaga: " + dataLimite 
    )

    if(confirmacao == true || "enter"){
        const novaVaga = {
            nome,
            descricao,
            dataLimite,
            candidatos: []
        }

        vagas.push(novaVaga)

        alert("Vaga criada com sucesso!")
    }
}

function exibirVaga() {
    const indice = parseFloat(prompt("Informe o índice da vaga que deseja exibir:"))
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function (textoAcumulado, candidatos) {
        return textoAcumulado += "\n - " + candidatos
    }, "")

    alert(
        "Vaga n° " + indice +
        "\n\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite +
        "\nQntd. de candidatos: " + vaga.candidatos.length +
        "\nCandidatos inscritos: \n\n" + candidatosEmTexto
    )
}

function inscreverCandidato() {
    const nomeCandidato = prompt("Qual é o nome do candidato(a)?")
    const indice = parseFloat(prompt("Qual é o índice da vaga que o(a) candidato(a) deseja se inscrever?"))

    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Confirma a inscrição do candidato na vaga n° " + indice + "?" +
        "\n\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite 
    )

    if(confirmacao == true || "enter"){
        vaga.candidatos.push(nomeCandidato)
        alert("Inscrição realizada com sucesso!")
    }
}

function excluirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja excluir:")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Tem certeza que desja deletar a vaga n° " + indice + "?" +
        "\n\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite 
    )

    if(confirmacao == true || "enter"){
        vaga.splice(indice, 1)
        alert("Vaga excluída com sucesso!")
    }
}

function exibirMenu() {
    const option = prompt(
        "Seja bem-vindo ao nosso sistema de vagas!" + 
        "\nSelecione a opção desejada:" +
        "\n\n1. Listar vagas" +
        "\n2. Criar vaga" +
        "\n3. Exibir vaga" +
        "\n4. Inscrever candidato" +
        "\n5. Excluir vaga" +
        "\n\nx. Sair"
    )

    return option
}

function executar() {
    let option = ""

    do {
        option = exibirMenu()

        switch (option) {
            case "1":
            listarVagas()
            break;
        case "2":
            criarVaga()
            break;
        case "3":
            exibirVaga()
            break;
        case "4":
            inscreverCandidato()
            break;
        case "5":
            excluirVaga()
            break;
        case "x":
            alert("Encerrando...")
            break;
        default:
            alert("Opção inválida!")
            break;
        }
    } while (option !== "x");
}

executar()