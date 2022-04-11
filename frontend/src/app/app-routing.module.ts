import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ListMenuComponent } from './list-menu/list-menu.component';

const routes: Routes = [
  {path: 'header' , component: HeaderComponent},
  {path: '' , component: AcceuilComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'menu' , component: ListMenuComponent},
  {path: 'footer' , component: FooterComponent},
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
