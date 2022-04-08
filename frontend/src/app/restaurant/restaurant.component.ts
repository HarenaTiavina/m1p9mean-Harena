import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  @Input() restaurant !: Restaurant;
  

  ngOnInit(): void {
   
  }

}
