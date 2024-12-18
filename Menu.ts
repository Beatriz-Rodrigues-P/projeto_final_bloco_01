import readlinesync = require("readline-sync")

export function main(){

    let opcao:number

    while(true){

        console.log("_____________________________________________________")
        console.log("                                                     ")
        console.log("                   CodArt Lar                        ")
        console.log("_____________________________________________________")
        console.log("                                                     ")
        console.log("            1 - Cadastrar item                       ")
        console.log("            2 - Listar todos os itens                ")
        console.log("            3 - Listar itens pelo ID                 ")
        console.log("            4 - Atualizar um item                    ")
        console.log("            5 - Apagar item do sistema               ")
        console.log("            6 - Finalizar programa                   ")
        console.log("                                                     ")
        console.log("_____________________________________________________")
        console.log("                                                     ")

        console.log("Entre com a opção desejada: ")
        opcao=readlinesync.questionInt("")

        if (opcao==6){
            console.log("\n      CodArt Lar - Design que codifica seu estilo!    ")
            sobre()
            process.exit(0)
        }

        switch (opcao){
            case 1:
                console.log("\n\nCadastrar item\n\n")
            break

            case 2:
                console.log("\n\nListar todos os itens\n\n")
            break

            case 3:
                console.log("\n\nConsultar item pelo ID\n\n")
            break
            
            case 4:
                console.log("\n\nAtualizar dados do item\n\n")
            break

            case 5:
                console.log("\n\nApagar um item\n\n")
            break
        }
    }

}

export function sobre(): void {
    console.log("_______________________________________________________")
    console.log("                                                       ")
    console.log(" Projeto desenvolvido por: Beatriz Rodrigues de Paula  ")
    console.log("     Generation Brasil - generation@generation.org     ")
    console.log("             github.com/conteudoGeneration             ")
    console.log("_______________________________________________________")
}

main()