import {Principal} from "./Principal"

export class Movel extends Principal{
    
    private _material:string;
	private _dimensoes: number;

	constructor(id: number, nome: string, tipo: number, preco: number, material: string, dimensoes: number){
		super(id, nome, tipo, preco)
		this._material = material
		this._dimensoes = dimensoes
	}

	public get material(): string {
		return this._material
	}

	public get dimensoes(): number {
		return this._dimensoes
	}

	public set material(value: string) {
		this._material = value
	}

	public set dimensoes(value: number) {
		this._dimensoes = value
	}

	public visualizar(): void {
        super.visualizar()
        console.log("Material do movel: " + this._material)
		console.log("Dimensoes do movel: " + this._dimensoes)
    }
}