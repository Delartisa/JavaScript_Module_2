// EXERCÍCIO | Pilha de cartas

let option = ""
const cards = []

do { option = prompt("Cartas no baralho: " + cards.length +
    "\nOpções" +
    "\n\n1. Adicionar uma carta" +
    "\n2. Puxar uma carta" +
    "\n3. Sair")

    switch (option) {
        case "1":
            let newCard = prompt("Qual carta deseja adiconar?")
            cards.unshift(newCard)
            break;
        case "2":
            if (cards.length === 0){
                alert("Não há cartas no baralho.")
            } else{
                let withdrawCard = cards.shift()
                alert("Carta retirada: " + withdrawCard)
            }
            break;
        case "3":
            alert("Encerrando...")
            break;
        default:
            alert("Opção inválida!")
            break;
    }


} while (option !== "3")