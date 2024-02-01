import { Fournisseur } from "./Fournisseur";

export class Reactif {
  id: number;
  nom: string;
  description: string;
  quantityStock: number;
  dateExp: Date;
  fournisseurs: Fournisseur[];
  constructor( id: number, nom: string, description: string, quantityStock: number, dateExp: Date, fournisseurs: Fournisseur[]){
    this.id = id;
    this.nom = nom;
    this.description = description;
    this.quantityStock = quantityStock;
    this.dateExp = dateExp;
    this.fournisseurs = fournisseurs;
  }
}
