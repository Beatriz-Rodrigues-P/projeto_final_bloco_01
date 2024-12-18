import { Principal } from "../Model/Principal";
import { Repository } from "../Repository/Repository";

export class Controller implements Repository{
        
    listaItens=new Array<Principal>()
    public id:number=0

    cadastrar(item:Principal): void {
        this.listaItens.push(item);
        console.log("O item foi cadastrado com êxito na loja!")
    }

    listartodos(): void {
        this.listaItens.forEach(item => item.visualizar())
    }

    listarID(id:number): void {
        let procuraItem = this.array(id);

        if (procuraItem != null) {
            procuraItem.visualizar();
        } else
            console.log("\nO item de ID:"+id+" não foi encontrado!")
    }

    atualizar(item:Principal):void{
        let procuraItem = this.array(item.id);

        if (procuraItem!=null){
            this.listaItens[this.listaItens.indexOf(procuraItem)]=item
            console.log("\nO item com ID: "+item.id+" foi atualizado com sucesso na loja!")
        } else
            console.log("\nO item com ID: "+item.id+" não foi encontrado na loja!")
    }

    apagar(id:number): void {
        let procuraItem=this.array(id);

        if (procuraItem!=null) {
            this.listaItens.splice(this.listaItens.indexOf(procuraItem), 1);
            console.log("\nO item com ID: "+id+" foi apagado com sucesso!")
        }else
        console.log("\nO item com ID: "+id+" não foi encontrado na loja!")
    }

    //Criar o ID de um item
    public criarId(): number {
        return ++this.id;
    }

    //Verificar a existência de um item
    public array(id: number): Principal | null {

        for (let item of this.listaItens) {
            if (item.id === id)
                return item
        }

        return null;
    }
}