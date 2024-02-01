import { StatusAnalyse } from "./status-analyse";
import { TypeAnalyse } from "./type-analyse";

export class Analyse
{
  id: number;
  typeAnalyse: TypeAnalyse;
  commantaires: string;
  statusAnalyse: StatusAnalyse;
  dateDebut: Date;
  dateFin: Date;
}
