import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainnavbarComponent } from './mainnavbar/mainnavbar.component';
import { BecomeasellerComponent } from './mainnavbar/becomeaseller/becomeaseller.component';
import { SigninComponent } from './mainnavbar/signin/signin.component';
import { CartComponent } from './mainnavbar/cart/cart.component';
import { DotsComponent } from './mainnavbar/dots/dots.component';
import { HomeComponent } from './mainnavbar/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MainnavbarComponent,
    BecomeasellerComponent,
    SigninComponent,
    CartComponent,
    DotsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
