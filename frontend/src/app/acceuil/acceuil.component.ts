import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  restaurants!: Restaurant[];
  constructor(private restaurantService : RestaurantService) {}

  ngOnInit(): void {
    this.restaurants = this.restaurantService.restaurants;
  }

}
    