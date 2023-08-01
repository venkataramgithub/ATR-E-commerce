import { Component } from '@angular/core';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent {
  mobilelogos:any=[
    {image:'../../assets/logos/realme-logo.webp',title:'Realme'},
    {image:'../../assets/logos/poco-logo.webp',title:'Poco'},
    {image:'../../assets/logos/nothingR-logo.webp',title:'Nothing R'},
    {image:'../../assets/logos/gpixel-logo.webp',title:'G Pixel'},
    {image:'../../assets/logos/vivo-logo.webp',title:'Vivo'},
    {image:'../../assets/logos/redmi-logo.webp',title:'Red Mi'},
  ]

  mobilesidebar:any=[
    '../../assets/slide.webp',
    '../../assets/slide2.webp',
    '../../assets/slide3.webp',
    '../../assets/slide4.webp',
    '../../assets/slide6.webp'
  ]
}
