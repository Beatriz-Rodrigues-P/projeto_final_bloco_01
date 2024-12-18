import {Principal} from "./Principal"

export class Decoracao extends Principal{
    
    private _cor:string;

    constructor(id: number, nome: string, tipo: number, preco: number, cor: string){
        super(id, nome, tipo, preco)
        this._cor=cor
    }

	public get cor(): string {
		return this._cor;
	}

	public set cor(value: string) {
		this._cor = value;
	}

    public visualizar(){
        super.visualizar()
        console.log(`Cor da decoração: ${this._cor}`);
    }
}