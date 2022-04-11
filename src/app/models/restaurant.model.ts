export class Restaurant {
    id!:number;
    title!: string;
    description!: string;
    moyennePrix?: number;
    imageUrl!: string;
    categorie!: string;

    constructor(id:number , title: string, description: string, moyennePrix: number , imageUrl: string, categorie: string) {
      this.title = title;
      this.description = description;
      this.imageUrl = imageUrl;
      this.moyennePrix = moyennePrix;
      this.categorie = categorie;
    }
    
  }