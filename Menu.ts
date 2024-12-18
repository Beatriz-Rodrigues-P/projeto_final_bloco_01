import readlinesync = require("readline-sync")
import { Controller } from "./src/Controller/Controller"
import { Movel } from "./src/Model/Movel"
import { Decoracao } from "./src/Model/Decoracao"
import { colors } from "./src/Util/Colors"

export function main(){

    let opcao, id, tipo, preco:number
    let nome, material, cor, dimensoes:string
    let tipoItens=["Movel", "Decoracao"]
    const Icontroller=new Controller()

    //Testar o funcionamento do código no tipo Móvel
    Icontroller.cadastrar(new Movel(123-1, "Escrivaninha", 1, 300.00, "MDF", "72x82"))
    //Testar o funcionamento do código no tipo Decoração
    Icontroller.cadastrar(new Decoracao(987-2, "Quadro de fotos", 2, 150.00, "Preta"))

    while(true){

        console.log(colors.fg.magentastrong)
        console.log("_____________________________________________________")
        console.log("                                                     ")
        console.log("                   CodArt Lar                        ")
        console.log("_____________________________________________________", colors.reset)
        console.log(colors.fg.magenta)
        console.log("                                                     ")
        console.log("            1 - Cadastrar item                       ")
        console.log("            2 - Listar todos os itens                ")
        console.log("            3 - Listar itens pelo ID                 ")
        console.log("            4 - Atualizar um item                    ")
        console.log("            5 - Apagar item do sistema               ")
        console.log("            6 - Finalizar programa                   ")
        console.log("                                                     ", colors.reset)
        console.log(colors.fg.magentastrong)
        console.log("_____________________________________________________")
        console.log("                                                     ")
        console.log("Entre com a opção desejada:                          ", colors.reset)
        console.log(colors.fg.magenta)
        opcao=readlinesync.questionInt("")
        console.log(colors.reset)

        if (opcao==6){
            console.log(colors.fg.white, colors.bg.magenta)
            console.log("                                                       ")
            console.log("      CodArt Lar - Design que codifica seu estilo!     ")
            console.log("                                                       ")
            sobre()
            process.exit(0)
            console.log(colors.reset)
        }

        switch (opcao){
            case 1:
                console.log(colors.fg.magentastrong,"\n\nCadastrar item\n\n", colors.reset)
                console.log(colors.fg.magenta)
                nome=readlinesync.question("Digite o nome do item: ")
				tipo=readlinesync.keyInSelect(tipoItens, "", {cancel: false,}) + 1
				preco=readlinesync.questionFloat("Digite o preco do item: R$")
                
                switch (tipo) {
					case 1:
						material=readlinesync.question("Digite qual o material do item: ")
						dimensoes=readlinesync.question("Digite as dimensoes do item: ")
						Icontroller.cadastrar(new Movel(Icontroller.criarId(), nome, tipo, preco, material, dimensoes))
					break
					case 2:
						cor=readlinesync.question("Digite a cor do item:")
						Icontroller.cadastrar(new Decoracao(Icontroller.criarId(), nome, tipo, preco, cor))
                        console.log(colors.reset)
					break
				}
			keyPress()
            break

            case 2:
                console.log(colors.fg.magentastrong,"\n\nListar todos os itens\n\n", colors.reset)
                console.log(colors.fg.magenta)
				Icontroller.listartodos()
                console.log(colors.reset)
            keyPress()
            break

            case 3:
                console.log(colors.fg.magentastrong,"\n\nConsultar item pelo ID\n\n", colors.reset)
                console.log(colors.fg.magenta)
                id=readlinesync.questionInt("Digite o ID do item: ")
				Icontroller.listarID(id)
                console.log(colors.reset)
            keyPress()
            break
            
            case 4:
                console.log(colors.fg.magentastrong,"\n\nAtualizar dados do item\n\n", colors.reset)
                console.log(colors.fg.magenta)
                id = readlinesync.questionInt("Digite o ID do item: ")
				let item=Icontroller.array(id)
				if (item!==null){
					nome=readlinesync.question("Digite o nome do item: ")
					tipo = item.tipo
					preco = readlinesync.questionFloat("Digite o preco do item: ")

                    switch (tipo) {
						case 1:
							material=readlinesync.question("Digite qual o material do item: ")
                            dimensoes=readlinesync.question("Digite as dimensoes do item: ")
							Icontroller.atualizar(new Movel(Icontroller.criarId(), nome, tipo, preco, material, dimensoes))
						break
						case 2:
                            cor=readlinesync.question("Digite a cor do item:")
                            Icontroller.atualizar(new Decoracao(Icontroller.criarId(), nome, tipo, preco, cor))
                    console.log(colors.reset)
						break
					}
				} else console.log("Item não encontrado na loja!")
            keyPress()
            break

            case 5:
                console.log(colors.fg.magentastrong,"\n\nApagar um item\n\n", colors.reset)
                console.log(colors.fg.magenta)
                id=readlinesync.questionInt("Digite o ID do item: ")
				Icontroller.apagar(id)
            keyPress()
            break
    default:
				console.log("\nOpção Inválida!\n")
                console.log(colors.reset)
			keyPress()
			break
        }
    }

}


export function sobre(): void 
    {console.log(colors.fg.white, colors.bg.magenta)
    console.log("_______________________________________________________")
    console.log("                                                       ")
    console.log(" Projeto desenvolvido por: Beatriz Rodrigues de Paula  ")
    console.log("     Generation Brasil - generation@generation.org     ")
    console.log("             github.com/conteudoGeneration             ")
    console.log("_______________________________________________________")
    console.log("                                                       ")
    console.log(colors.reset)}

function keyPress(): void {
	console.log("")
	console.log(colors.fg.magentastrong ,"\nPressione enter para continuar...", colors.reset)
	readlinesync.prompt()
}

main()