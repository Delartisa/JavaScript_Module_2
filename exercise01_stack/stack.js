const stack = [];
let option = "";

do{
    option = prompt("Quantidade de cartas: " + stack.length + "\n\n" +
        "1. Adicionar uma carta" + "\n" +
        "2. Puxar uma carta" + "\n" +
        "3. Sair" + "\n"
    );

    switch(option){
        case "1":
            let newCard = prompt("Escreva o nome da carta a ser adicionada:");
            stack.unshift(newCard)
            break
            case "2":
                let removedCard = stack.pop()
                if(!removedCard){
                    alert("Nao ha cartas disponiveis no baralho.")
                } else{
                    alert("A carta retirada foi um " + removedCard)
                }
                break
                case "3":
                    alert("Encerrando o programa...")
                    break
                    default:
                        alert("Opcao invalida!")
                        break
    };


} while(option !== "3");