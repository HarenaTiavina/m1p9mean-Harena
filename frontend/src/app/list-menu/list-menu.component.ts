import { Component, OnInit } from '@angular/core';
import { Plat } from '../models/plat.model';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css']
})
export class ListMenuComponent implements OnInit {
  myPlats!: Plat[];
  idRestaurant!: number;
  ngOnInit(): void {
      this.idRestaurant = 1;
    this.myPlats = [
      {
        id:1,
        idRestaurant:1,
        nom : 'plat 1',
        prix:1000,
        imageUrl:'assets/f9.png'
    },
    {
        id:2,
        idRestaurant:1,
        nom : 'plat 2',
        prix:1000,
        imageUrl:'assets/f9.png'
    },
    {
        id:3,
        idRestaurant:1,
        nom : 'plat 3',
        prix:1000,
        imageUrl:'assets/f9.png'
    },
    {
        id:4,
        idRestaurant:2,
        nom : 'plat 4',
        prix:1000,
        imageUrl:'assets/f9.png'
    },
    {
        id:5,
        idRestaurant:2,
        nom : 'plat 5',
        prix:1000,
        imageUrl:'assets/f9.png'
    },
    {
        id:6,
        idRestaurant:3,
        nom : 'plat 6',
        prix:1000,
        imageUrl:'assets/f9.png'
    },
    {
        id:7,
        idRestaurant:3,
        nom : 'plat 7',
        prix:1000,
        imageUrl:'assets/f9.png'
    },
    {
        id:8,
        idRestaurant:4,
        nom : 'plat 8',
        prix:1000,
        imageUrl:'assets/f9.png'
    },
    {
        id:9,
        idRestaurant:4,
        nom : 'plat 9',
        prix:1000,
        imageUrl:'assets/f9.png'
    },
    {
        id:10,
        idRestaurant:5,
        nom : 'plat 10',
        prix:1000,
        imageUrl:'assets/f9.png'
    }
    ]
  }

}
