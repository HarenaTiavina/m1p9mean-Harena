import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})

export class RestaurantListComponent implements OnInit {
    myRestaurant!: Restaurant[];
    ngOnInit(): void {
        this.myRestaurant = [
          {
            id:1,
            title: 'restaurant 1' ,
            description: 'lorem ipsum' ,
            moyennePrix: 5000 ,
            imageUrl: 'null' ,
            categorie: 'categorie 1'
        },
        {
            id:2,
            title: 'restaurant 2' ,
            description: 'lorem ipsum' ,
            moyennePrix: 2000 ,
            imageUrl: 'null' ,
            categorie: 'categorie 2'
        },
        {
            id:3,
            title: 'restaurant 3' ,
            description: 'lorem ipsum' ,
            moyennePrix: 3000 ,
            imageUrl: 'null' ,
            categorie: 'categorie 3'
        },
        {
            id:4,
            title: 'restaurant 4' ,
            description: 'lorem ipsum' ,
            moyennePrix: 5000 ,
            imageUrl: 'null' ,
            categorie: 'categorie 4'
        },
        {
            id:5,
            title: 'restaurant 5' ,
            description: 'lorem ipsum' ,
            moyennePrix: 5000 ,
            imageUrl: 'null' ,
            categorie: 'categorie 5'
        },
        {
            id:6,
            title: 'restaurant 6' ,
            description: 'lorem ipsum' ,
            moyennePrix: 5000 ,
            imageUrl: 'null' ,
            categorie: 'categorie 6'
        },
        {
            id:7,
            title: 'restaurant 7' ,
            description: 'lorem ipsum' ,
            moyennePrix: 10000 ,
            imageUrl: 'null' ,
            categorie: 'categorie 7'
        },
        {
            id:8,
            title: 'restaurant 8' ,
            description: 'lorem ipsum' ,
            moyennePrix: 5000 ,
            imageUrl: 'null' ,
            categorie: 'categorie 8'
        },
        {
            id:9,
            title: 'restaurant 9' ,
            description: 'lorem ipsum' ,
            moyennePrix: 5000 ,
            imageUrl: 'null' ,
            categorie: 'categorie 9'
        },
        {
            id:10,
            title: 'restaurant 10' ,
            description: 'lorem ipsum' ,
            moyennePrix: 15000 ,
            imageUrl: 'null' ,
            categorie: 'categorie 10'
        }
        ]
      }
}