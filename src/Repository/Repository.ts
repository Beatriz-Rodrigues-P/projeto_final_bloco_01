import { Principal } from "../Model/Principal"

export interface Repository{

    //Métodos do CRUD (Create, Read, Update e Delete)
    cadastrar():void
    listartodos():void
    listarID():void
    atualizar():void
    apagar():void
}