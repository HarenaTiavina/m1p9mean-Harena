import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {path: 'header' , component: HeaderComponent},
  {path: 'login' , component: LoginComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
