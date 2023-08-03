import { Component } from '@angular/core';

@Component({
  selector: 'app-mainnavbar',
  templateUrl: './mainnavbar.component.html',
  styleUrls: ['./mainnavbar.component.css']
})
export class MainnavbarComponent {
  showSubmenu = false;

  showSubMenu() {
    this.showSubmenu = true;
  }

  hideSubMenu() {
    this.showSubmenu = false;
  }
  homelogin=false;
  login(){
    this.homelogin=true;
  }
  loginclose(){
    this.homelogin=false;
  }
}
