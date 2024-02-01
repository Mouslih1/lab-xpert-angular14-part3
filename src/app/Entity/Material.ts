export class Material {
  id: number;
  libelle: string;
  quantityStock: number;
  price: number;
  constructor( id: number, libelle: string, quantityStock: number, price: number){
    this.id = id;
    this.libelle = libelle;
    this.quantityStock = quantityStock;
    this.price = price;
  }
}
