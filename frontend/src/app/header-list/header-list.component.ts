import { Component, OnInit } from '@angular/core';
import { Header } from '../models/header.model';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header-list',
  templateUrl: './header-list.component.html',
  styleUrls: ['./header-list.component.css']
})
export class HeaderListComponent implements OnInit {
  headers!: Header[];

  constructor(private headerService: HeaderService){}
  ngOnInit(): void {
      this.headers = this.headerService.headers;
  }
  // ngOnInit(): void {
  //   this.headers = [
  //     {
  //       title:'Archibald',
  //       description:'Mon meilleur ami depuis tout petit !',
  //       imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
  //       createdDate: new Date(),
  //       snaps: 0
  //     },
  //     {
  //       title:'Archibald 2',
  //       imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
  //       createdDate: new Date(),
  //       snaps: 0
  //     }
  //   ];
  // }

}
