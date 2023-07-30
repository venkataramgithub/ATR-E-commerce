import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentslide:any=0;
  show=false;
  clearid:any;
  intervalid:any;
  imageblock:any=[
    '../../assets/slide.webp',
    '../../assets/slide2.webp',
    '../../assets/slide3.webp',
    '../../assets/slide4.webp',
    '../../assets/slide6.webp',
  ]
  slideblock2:any=[
    {image:'../../assets/cam.jpg',title:'Television',price:'₹50000'},
    {image:'../../assets/tv.jpg',title:'Camera',price:'₹55000'},
    {image:'../../assets/project.jpeg',title:'laptop',price:'₹8000'},
    {image:'../../assets/monitors.jpeg',title:'Monitors',price:'₹15000'},
    {image:'../../assets/printer.jpeg',title:'Printer',price:'₹7500'},
    {image:'../../assets/trimers.jpeg',title:'Trimers',price:'₹1000'},
  ]
   sliderblock3:any=[
      {image:'../../assets/cycle.jpeg',title:'Cycle',price:'₹5000'},
      {image:'../../assets/treadmill.jpeg',title:'TreadMill',price:'₹80000'},
       {image:'../../assets/remotecar.jpeg',title:'RemoteCar',price:'₹1000'},
       {image:'../../assets/microphone.jpeg',title:'Mics',price:'₹7000'},
       {image:'../../assets/bat.jpeg',title:'Toys',price:'₹500'},
       {image:'../../assets/musicalkeyboard.jpeg',title:'MusicKeys',price:'₹40000'}
      
   ]
   sliderblock4:any=[
      {image:'../../assets/yoga.jpeg',title:'Yoga Mats',price:'₹500'},
      {image:'../../assets/honey.jpeg',title:'Honey',price:'upto 75% off'},
      {image:'../../assets/cofee.jpeg',title:'Coffe powder',price:'₹200'},
      {image:'../../assets/book.jpeg',title:'Fiction Books',price:'Upto 70% offer'},
      {image:'../../assets/tools.jpeg',title:'Tools',price:'₹500'},
      {image:'../../assets/cycle.jpeg',title:'Cycle',price:'₹5000'},
   ]
   sliderblock5:any=[
    {image:'../../assets/lights.jpeg',title:'Lights',price:'Upto 80% Off'},
    {image:'../../assets/bed.jpeg',title:'Bed covers',price:'₹500'},
    {image:'../../assets/sopaa.jpeg',title:'Sopa',price:'₹5000'},
    {image:'../../assets/battery.jpeg',title:'batteries',price:'₹20'},
    {image:'../../assets/nets.jpeg',title:'Nets',price:'₹700'},
    {image:'../../assets/plants.jpeg',title:'Plants',price:'₹50'}
   ]
   sliderblock6:any=[
    {image:'../../assets/fiction.jpeg',title:'Books',price:'Upto 80% Off'},
    {image:'../../assets/clean.jpeg',title:'Cleaning Essentials',price:'₹500'},
    {image:'../../assets/helment.jpeg',title:'Helment',price:'₹800'},
    {image:'../../assets/station.jpg',title:'Store',price:'₹200'},
    {image:'../../assets/yres.jpg',title:'Tyres',price:'₹1700'},
    {image:'../../assets/carwaher.jpeg',title:'Kits',price:'Upto 50% Off'}
   ]
  ngOnInit(){
    this.startSlide()
}
startSlide(){
 this.intervalid=setInterval(()=>{
   this.shownextslide();
 },5000);

}
shownextslide(){
    
  this.currentslide=(this.currentslide+1)%this.imageblock.length;
  console.log(this.imageblock[this.currentslide]);
}
showprev(){
  if(this.currentslide>0){
    clearInterval(this.intervalid);
    this.currentslide=this.currentslide-1;
    console.log(this.imageblock[this.currentslide]);
    this.clearid=setTimeout(()=>{
      this.startSlide();
    },3000);
  }
}
shownext(){
  if(this.currentslide<3){
    clearInterval(this.intervalid);
    this.currentslide=this.currentslide+1;
    console.log(this.imageblock[this.currentslide]);
    this.clearid=setTimeout(()=>{
      this.startSlide();
    },3000);
    }
}



}
