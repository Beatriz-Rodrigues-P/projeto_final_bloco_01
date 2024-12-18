import { Principal } from "../Model/Principal"

export interface Repository{

    //Métodos do CRUD (Create, Read, Update e Delete)
    cadastrar(item:Principal):void
    listartodos():void
    listarID(item:number):void
    atualizar(item:Principal):void
    apagar(id:number):void
}