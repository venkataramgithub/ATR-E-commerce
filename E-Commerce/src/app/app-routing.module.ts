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
import { CartComponent } from './cart/cart.component';
import { FlipkartComponent } from './cart/flipkart/flipkart.component';
import { GroceryComponent } from './cart/grocery/grocery.component';
import { BecomesellComponent } from './becomesell/becomesell.component';

const routes: Routes = [
  {path:"",redirectTo:'navbar',pathMatch:'full'},
  {path:'navbar',component:MainnavbarComponent,children:[
    {path:"",redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'becseller',component:BecomeasellerComponent},
    {path:'becomesell',component:BecomesellComponent},
    {path:'signin',component:SigninComponent},
    {path:'dots',component:DotsComponent},
  ]},
  {path:'login',component:LoginComponent},
  {path:'cart',component:CartComponent,children:[
    {path:'',redirectTo:'flipkart',pathMatch:'full'},
    {path:'flipkart',component:FlipkartComponent},
    {path:'grocery',component:GroceryComponent},
  ]},
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
