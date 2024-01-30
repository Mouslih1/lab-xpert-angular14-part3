export class Fournisseur {
   id: number;
   nom: string;
   societeName: string;
  constructor( id: number, nom: string, societeName: string ){
    this.id = id;
    this.nom = nom;
    this.societeName = societeName;
  }
}
