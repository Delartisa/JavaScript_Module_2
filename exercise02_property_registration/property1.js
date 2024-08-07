// EXERCÍCIO | Cadastro de imóveis 

let option = "";
let propertys = [];

do { option = prompt("Imóveis cadastrados " + propertys.length +
    "\nOpções:" +
    "\n\n1. Cadastrar um imóvel" +
    "\n2. Mostrar todos os imóveis" +
    "\n3. Sair"
);

switch (option) {
    case "1":
        const property = {};
        property.nome = prompt("Qual é o nome do proprietário?");
        property.qntQuartos = prompt("Quantos quartos a propriedade possui?");
        property.qntBanheiros = prompt("Quantos banheiros a propriedade possui?");
        property.temGaragem = prompt("A propriedade possui garagem? (S/N)");

        confirm("Você confirma os dados:" +
            "\n\nNome do proprietário: " + property.nome +
            "\nQuantidade de quartos: " + property.qntQuartos +
            "\nQuantidade de banheiros: " + property.qntBanheiros +
            "\nPossui garagem: " + property.temGaragem
        );

        if (confirm === true || "enter") {
            propertys.push(property);
        };

        break;
    case "2":
        for (let i = 0; i < propertys.length; i++) {
            alert("Propriedade " + (i + 1) +
                "\n\nNome do proprietário: " + propertys[i].nome +
                "\nQuantidade de quartos: " + propertys[i].qntQuartos +
                "\nQuantidade de banheiros: " + propertys[i].qntBanheiros +
                "\nPossui garagem: " + propertys[i].temGaragem
            );
        };
        break;
    case "3":
        alert("Encerrando...");
        break;
    default:
        alert("Opção inválida!");
        break;
}

} while(option !== "3");

    