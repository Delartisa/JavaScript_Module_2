// Sistema de vagas de emprego

// Declaração de variáveis
let vagasTotais = []
let candidatosTotais = []


// Funções
function listarVagas() {
    for(let i = 0; i < vagasTotais.length; i++) {
        alert("VAGA N° " + (i + 1) +
            "\nNome da vaga: " + vagasTotais[i].nomeVaga +
            "\nCandidatos inscritos: " + candidatosTotais.length)
    }
}

function criarVaga() {
    let vaga = {
        nomeVaga: "",
        descricaoVaga: "",
        dataLimite: ""
    }

    vaga.nomeVaga = prompt("Qual é o nome da vaga?")
    vaga.descricaoVaga = prompt("Escreva a descrição da vaga:")
    vaga.dataLimite = prompt("Escreva a data limite da vaga:\n\n*use o formato padrão. Ex: dd/mm/aaaa")

    confirm("Você confirma os dados?" +
        "\n\nNome da vaga: " + vaga.nomeVaga +
        "\nDescrição da vaga: " + vaga.descricaoVaga +
        "\nData limite: " + vaga.dataLimite
    )

    if(confirm === "enter" || true) {
        vagasTotais.push(vaga)
    }
}

function visualizarVagas() {
    let indice = parseFloat(prompt("Qual é o número da vaga que deseja ver?"))
    alert(
        "Vaga N° " + (indice + 1) +
        "\n\nNome da vaga: " + vagasTotais[indice].nomeVaga +
        "\nDescrição: " + vagasTotais[indice].descricaoVaga +
        "\nData limite: " + vagasTotais[indice].dataLimite +
        "\nCandidatos inscritos: "
    )
}

function inscreverCandidato() {
    let candidato = ""
    let indiceVaga = 0

    candidato = prompt("Qual é o nome do candidato?")
    indiceVaga = parseFloat(prompt("Para qual vaga deseja se candidatar? (apenas números)"))

    confirm(
        "*CONFIRMAÇÃO*" +
        "\n\nVocê está se candidatando para a vaga N° " + indiceVaga +
        "\n\nNome da vaga:" + vagasTotais[indiceVaga].nomeVaga +
        "\nDescrição: " + vagasTotais[indiceVaga].descricaoVaga +
        "\nData limite: " + vagasTotais[indiceVaga].dataLimite
    )

    if(confirm === "enter" || true) {
        candidatosTotais.push(candidato)
        alert("Candidato inscrito.")
    }
}

function excluirVaga() {
    let indiceVagaExcluida = parseFloat(prompt("Escreva o número da vaga que deseja excluir:"))

    confirm(
        "Informações da vaga a ser excluída:" +
        "Vaga N° " + (indiceVagaExcluida + 1) +
        "\n\nNome da vaga: " + vagasTotais[indiceVagaExcluida].nomeVaga +
        "\nDescrição: " + vagasTotais[indiceVagaExcluida].descricaoVaga +
        "\nData limite: " + vagasTotais[indiceVagaExcluida].dataLimite
    )

    if(confirm === "enter" || true) {
        vagasTotais.splice(indiceVagaExcluida, 1)
        alert("Vaga excluída.")
    }
}


function executar(){
    let option = ""

    do{
        option = prompt(
            "--Vagas de emprego--" + 
            "\n\nEscolha uma opção:" +
            "\n1. Listar vagas" +
            "\n2. Criar vaga" +
            "\n3. Visualizar vaga" +
            "\n4. Inscrever candidato" +
            "\n5. Excluir vaga" +
            "\n\n x. Sair"
        )
    
        switch (option) {
            case "1":
                listarVagas()
                break;
            case "2":
                criarVaga()
                break;
            case "3":
                visualizarVagas()
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
    } while(option !== "x")
}

executar()



