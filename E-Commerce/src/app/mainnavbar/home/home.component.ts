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
  slideblock:any=[
    {image:'../../assets/cam.jpg',title:'Television',price:'5000'},
    {image:'../../assets/tv.jpg',title:'Camera',price:'2500'},
    {image:'../../assets/project.jpeg',title:'laptop',price:'2000'},
    {image:'../../assets/cam.jpg',title:'Dress',price:'3000'},
    {image:'../../assets/cam.jpg',title:'Television',price:'2500'},
    {image:'../../assets/cam.jpg',title:'Camera',price:'2000'},
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
