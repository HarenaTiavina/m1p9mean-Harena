import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Header } from '../models/header.model';
import { HeaderService } from '../services/header.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() header!: Header;
  constructor(private headerService: HeaderService) {}
  ngOnInit() {
    
  } 
  onAddSnap() {
    this.header.snaps++;
  }

  onSnap() {
    this.headerService.headerById(this.header.id);
  }

  
}

