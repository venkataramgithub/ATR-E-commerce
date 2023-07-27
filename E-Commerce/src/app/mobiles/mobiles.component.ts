import { Component } from '@angular/core';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent {
  mobilelogos:any=[
    {image:'../../assets/realme-logo.webp',title:'Realme'},
    {image:'../../assets/poco-logo.webp',title:'Poco'},
    {image:'../../assets/nothingR-logo.webp',title:'Nothing R'},
    {image:'../../assets/gpixel-logo.webp',title:'G Pixel'},
    {image:'../../assets/vivo-logo.webp',title:'Vivo'},
    {image:'../../assets/redmi-logo.webp',title:'Red Mi'},
  ]
}
