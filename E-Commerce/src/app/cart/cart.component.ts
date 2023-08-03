import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  show="null";
  vis="null";
  action(){
    this.vis="null";
     this.show="content";

     
  }
  hide(){
   this.show='null';
   this.vis="content";
  }
  
}
