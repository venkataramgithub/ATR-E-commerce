import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainnavbarComponent } from './mainnavbar/mainnavbar.component';
import { BecomeasellerComponent } from './mainnavbar/becomeaseller/becomeaseller.component';
import { SigninComponent } from './mainnavbar/signin/signin.component';
import { CartComponent } from './mainnavbar/cart/cart.component';
import { DotsComponent } from './mainnavbar/dots/dots.component';
import { HomeComponent } from './mainnavbar/home/home.component';

const routes: Routes = [
  {path:"",redirectTo:'navbar',pathMatch:'full'},
  {path:'navbar',component:MainnavbarComponent,children:[
    {path:"",redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'becseller',component:BecomeasellerComponent},
    {path:'signin',component:SigninComponent},
    {path:'cart',component:CartComponent},
    {path:'dots',component:DotsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
