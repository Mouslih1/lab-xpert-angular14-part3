import { Echontillon } from "./echontillon";
import { Sexe } from "./sexe";

export class Patient
{
  id: number;
  nom: string;
  prenom: string;
  address: string;
  tel: string;
  ville: string;
  sexe: Sexe;
  age: number;
  dateNaissance: Date;
  echontillons: Echontillon[];
}
