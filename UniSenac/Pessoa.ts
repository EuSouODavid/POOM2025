//superClass
export class Pessoa{
    protected _nome: string = "";
    protected _cpf: string = "";
    protected _endereco:string="";
    protected _estadoCivil:string="";


    public falar():string{
        return "Pessoa falando"
    }
}