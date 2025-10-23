import { Diciplina } from "./Disciplina";
import { Pessoa } from "./Pessoa";

export class Aluno extends Pessoa{
    private _turma:string="";
    private _disciplinasMatriculadas:Diciplina[]=[];


    public falar():string{
        return "Aluno falando"
    }
}