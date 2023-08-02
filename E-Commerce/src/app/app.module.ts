import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainnavbarComponent } from './mainnavbar/mainnavbar.component';
import { BecomeasellerComponent } from './mainnavbar/becomeaseller/becomeaseller.component';
import { SigninComponent } from './mainnavbar/signin/signin.component';
import { DotsComponent } from './mainnavbar/dots/dots.component';
import { HomeComponent } from './mainnavbar/home/home.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { MainbarComponent } from './mainbar/mainbar.component';
import { ItembarComponent } from './itembar/itembar.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { MobilerangeselectionComponent } from './mobilerangeselection/mobilerangeselection.component';

@NgModule({
  declarations: [
    AppComponent,
    MainnavbarComponent,
    BecomeasellerComponent,
    SigninComponent,
    DotsComponent,
    HomeComponent,
    MobilesComponent,
    MainbarComponent,
    ItembarComponent,
    LoginComponent,
    FooterComponent,
    MobilerangeselectionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
