// EXERCICIO | Cadastro de imoveis

let imoveis = []
let option = ""

do{
    option = prompt("Imoveis cadastrados: " + imoveis.length + "\n\n" +
        "Opcoes:\n1. Cadastrar um imovel\n2. Mais detalhes sobre os imoveis\n3. Sair"
    )

    switch(option){
        case "1":
            const imovel = {}
            imovel.proprietario = prompt("Qual e o nome do proprietario?")   
            imovel.quartos = parseFloat(prompt("Qual e a quantidade de quartos?"))         
            imovel.banheiros = parseFloat(prompt("Qual e a quantidade de banheiros?"))
            imovel.garagem = prompt("Possui garagem? (S/N)")

            let confirmation = confirm("Confirme os dados:" + 
                "\n\nNome do proprietario: " + imovel.proprietario +
                "\nNumero de quartos: " + imovel.quartos +
                "\nNumero de banheiros: " + imovel.banheiros +
                "\nPossui garagem: " + imovel.garagem + "\n")
                if(confirmation === true){
                    imoveis.unshift(imovel)
                }
            break
            case "2":
                for(let i = 0; i < imoveis.length; i++){
                    alert("Imovel " + (i + 1) +
                    "\nProprietario: " + imoveis[i].proprietario +
                    "\nNumero de quartos: " + imoveis[i].quartos +
                    "\nNumero de banheiros: " + imoveis[i].banheiros +
                    "\nPossui garagem: " + imoveis[i].garagem + "\n"
                    )
                }
                break
                case "3":
                    alert("Encerrando programa...")
                    break
                    default:
                        alert("Opcao invalida!")
                        break
    }

} while(option !== "3")
