export class Plat {
    id!:number;
    idRestaurant!:number;
    nom!: string;
    prix?: number;
    imageUrl!: string;

    constructor(id:number, idRestaurant:number , nom: string, prix: number , imageUrl: string) {
      this.nom = nom;
      this.imageUrl = imageUrl;
      this.prix = prix;
    }
    
  }