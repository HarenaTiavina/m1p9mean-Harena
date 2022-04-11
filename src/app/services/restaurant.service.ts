import { Injectable } from "@angular/core";
import { Restaurant } from "../models/restaurant.model";

@Injectable({
    providedIn:'root'
})
export class RestaurantService {
    restaurants : Restaurant[] = [
        {
            id:1,
            title:'restaurant 1',
            description:'description 1',
            moyennePrix:50,
            imageUrl:'null',
            categorie:'categorie 1'
        },
        {
            id:2,
            title:'restaurant 2',
            description:'description 2',
            moyennePrix:50,
            imageUrl:'null',
            categorie:'categorie 2'
        },
        {
            id:3,
            title:'restaurant 3',
            description:'description 3',
            moyennePrix:50,
            imageUrl:'null',
            categorie:'categorie 3'
        },
        {
            id:4,
            title:'restaurant 4',
            description:'description 4',
            moyennePrix:50,
            imageUrl:'null',
            categorie:'categorie 4'
        },
        {
            id:5,
            title:'restaurant 5',
            description:'description 5',
            moyennePrix:50,
            imageUrl:'null',
            categorie:'categorie 1'
        },
        {
            id:6,
            title:'restaurant 6',
            description:'description 6',
            moyennePrix:50,
            imageUrl:'null',
            categorie:'categorie 2'
        },
        {
            id:7,
            title:'restaurant 7',
            description:'description 7',
            moyennePrix:50,
            imageUrl:'null',
            categorie:'categorie 1'
        }
    ]
        
}