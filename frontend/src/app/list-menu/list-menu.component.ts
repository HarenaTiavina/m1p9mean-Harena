import { Component, OnInit } from '@angular/core';
import { Plat } from '../models/plat.model';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css']
})
export class ListMenuComponent implements OnInit {
  myPlats!: Plat[];

  ngOnInit(): void {
    this.myPlats = [
      {
        id:1,
        idRestaurant:1,
        nom : 'plat 1',
        prix:1000,
        imageUrl:'null'
    },
    {
        id:2,
        idRestaurant:1,
        nom : 'plat 2',
        prix:1000,
        imageUrl:'null'
    },
    {
        id:3,
        idRestaurant:1,
        nom : 'plat 3',
        prix:1000,
        imageUrl:'null'
    },
    {
        id:4,
        idRestaurant:2,
        nom : 'plat 4',
        prix:1000,
        imageUrl:'null'
    },
    {
        id:5,
        idRestaurant:2,
        nom : 'plat 5',
        prix:1000,
        imageUrl:'null'
    },
    {
        id:6,
        idRestaurant:3,
        nom : 'plat 6',
        prix:1000,
        imageUrl:'null'
    },
    {
        id:7,
        idRestaurant:3,
        nom : 'plat 7',
        prix:1000,
        imageUrl:'null'
    },
    {
        id:8,
        idRestaurant:4,
        nom : 'plat 8',
        prix:1000,
        imageUrl:'null'
    },
    {
        id:9,
        idRestaurant:4,
        nom : 'plat 9',
        prix:1000,
        imageUrl:'null'
    },
    {
        id:10,
        idRestaurant:5,
        nom : 'plat 10',
        prix:1000,
        imageUrl:'null'
    }
    ]
  }

}
