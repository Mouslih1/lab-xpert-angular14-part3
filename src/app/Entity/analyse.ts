import { User } from "./user";

export class Analyse {
    id:number;
    user:User;
    TypeAnalyse:string;
    commantaires:string;
    statusAnalyse:string;
    statusResult:string;
    dateDebut :Date;
    dateFin:Date;
    sousAnalyses :[];
}
