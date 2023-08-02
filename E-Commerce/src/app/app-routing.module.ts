import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainnavbarComponent } from './mainnavbar/mainnavbar.component';
import { BecomeasellerComponent } from './mainnavbar/becomeaseller/becomeaseller.component';
import { SigninComponent } from './mainnavbar/signin/signin.component';
 
import { DotsComponent } from './mainnavbar/dots/dots.component';
import { HomeComponent } from './mainnavbar/home/home.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ItembarComponent } from './itembar/itembar.component';
import { MainbarComponent } from './mainbar/mainbar.component';

const routes: Routes = [
  {path:"",redirectTo:'navbar',pathMatch:'full'},
  {path:'navbar',component:MainnavbarComponent,children:[
    {path:"",redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'becseller',component:BecomeasellerComponent},
    {path:'signin',component:SigninComponent},
    {path:'dots',component:DotsComponent},
  ]},
  {path:'login',component:LoginComponent},
  {path:'footer',component:FooterComponent},
  {path:'itembar',component:ItembarComponent},
  {path:'mainbar',component:MainbarComponent},
  {path:'mobiles',component:MobilesComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
