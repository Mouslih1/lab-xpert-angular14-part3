export class Material {
  id: number;
  libelle: string;
  availableQuantity: number;
  price: number;
  constructor( id: number, libelle: string, availableQuantity: number, price: number){
    this.id = id;
    this.libelle = libelle;
    this.availableQuantity = availableQuantity;
    this.price = price;
  }
}
