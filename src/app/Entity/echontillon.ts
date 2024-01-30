import { Analyse } from "./analyse";
import { Patient } from "./patient";

export class Echontillon
{
  id: number;
  codeEchontillon: string;
  patient: Patient;
  datePrelevement: Date;
  analyses: Analyse[];
}
