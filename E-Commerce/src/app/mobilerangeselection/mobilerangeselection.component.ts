import { Component } from '@angular/core';
import { trigger,transition,state,style,animate } from '@angular/animations';

@Component({
  selector: 'app-mobilerangeselection',
  templateUrl: './mobilerangeselection.component.html',
  styleUrls: ['./mobilerangeselection.component.css'],
  animations:[
    trigger('openclose',[
      state('open',style({
        display:'block'
      })),
      state('close',style({
        display:'none'
      })),
      transition('open=>close',[
        animate('0.2s')
      ]),
      transition('close=>open',[
        animate('0.2s')
      ]),
    ]),
  ]
})
export class MobilerangeselectionComponent {
  isopen:any=false;
  israting:any=false;
  isram:any=false;
  isbattery:any=false;
  isinternal:any=false;
  isscreen:any=false;
  isprimary:any=false;
  isspeciality:any=false;
  issecondary:any=false;
  isprocess:any=false;
  mobilecompany:any=[
    'samsung',
    'apple',
    'realme',
    'poco',
    'infinix',
    'vivo'
  ]
  ram:any=[
    '4 GB',
    '3 GB',
    '2 GB',
    '1 GB AND BELOW',
    '8 GB AND ABOVE',
    '6 GB'
  ]
 internalstorage:any=[
  '256 GB & Above',
  '128 - 255.9 GB',
  '64 - 127.9 GB',
  '32 - 63.9 GB',
  '16 - 31.9 GB',
  '8 - 15.9 GB',
  '4 - 7.9 GB',
  '2 GB - 3.9 GB',
  '1 GB - 1.9 GB',
  'Less than 1 GB'
  ]
  batterycapacity:any=[
    '1000 - 1999 mAh',
    '2000 - 2999 mAh',
    '3000 - 3999 mAh',
    '4000 - 4999 mAh',
    '5000 - 5999 mAh',
    '6000 mAh & Above',
    'Less than 1000 mAh'
  ]
  screensize:any=[
    '5.7 - 5.9 inch',
    '5.5 - 5.6 inch',
    '5.2 - 5.4 inch',
    '5 - 5.1 inch',
    '4.5 - 4.9 inch',
    '4 - 4.4 inch',
    '3.5 - 3.9 inch',
    '3 - 3.4 inch',
    'Less than 3 inch',
    '6.4 inch & Above',
    '6 - 6.3 inch'
  ]
  primarycamera:any=[
    '5 - 7.9 MP',
    'Below 5 MP',
    '8 - 11.9 MP',
    '12 - 15.9 MP',
    '16 - 20.9 MP',
    '21 - 31.9 MP',
    '32 - 47.9 MP',
    '48 - 63.9 MP',
    '64 MP & Above'
  ]
  secondarycamera:any=[
    '12 - 15.9 MP',
    '16 - 20.9 MP',
    '21 MP & Above',
    '5 - 7.9 MP',
    '8 - 11.9 MP',
    'Below 5 MP'
  ]
  processorbrand:any=[
    'AMD',
    'Apple',
    'ARM',
    'Exynos',
    'Google',
    'HiSilicon',
    'Huawei',
    'Intel',
    'Mediatek',
    'RDA',
    'Snapdragon',
    'Spreadtrum',
    'Unisoc'
  ]
  speciality:any=[
    'Big Storage',
    'Higher Performance',
    'Long-Lasting Battery',
    'Selfie Camera',
  ]
  resolutiontype:any=[
    'Full HD',
    'Full HD+',
    'Full HD+ AMOLED Display',
    'Full HD+ E3 Super AMOLED Display',
    'Full HD+ Super AMOLED Display',
    'FWVGA',
    'FWVGA+',
    'HD',
    'HD+',
    'HQVGA',
    'HVGA',
    'Liquid Retina HD Display',
    'Quad HD',
    'Quad HD+',
    'quarter HD',
    'Quarter QVGA',
    'QVGA',
    'QXGA+',
    'Retina Display',
    'Retina HD Display',
    'Super Retina HD Display',
    'Super Retina XDR Display',
    'UHD 4K',
    'VGA',
    'WQHD',
    'WVGA'
  ]
  operationsystem:any=[
    'Android',
    'Blackberry',
    'iOS',
    'KaiOS',
    'Symbian',
    'Tizen',
    'Windows'
  ]
  networktype:any=[
    '2G',
    '3G',
    '4G',
    '4G VOLTE',
    '5G',
  ]
  simtype:any=[
    'Dual Sim',
    'Dual Sim(Nano + eSIM)',
    'Dual Sim(Physical + eSIM)',
    'Four Sim',
    'Single Sim',
    'Triple Sim',
  ]
  others:any=[
    'Buy More, Save More',
    'No Cost EMI',
    'Special Price'
  ]
  features:any=[
    'GPRS',
    'FM Player',
    'Bluetooth',
    'USB',
    'WiFi',
    'Music Player'
  ]
  numberofcores:any=[
    'Dual Core',
    'Hexa Core',
    'Octa Core',
    'Quad Core',
    'Single Core',
  ]
  discount:any=[
    '50% or more',
    '40% or more',
    '30% or more',
    '20% or more',
    '10% or more',
  ]
  clockspeed:any=[
    '1.5 - 1.9 GHz',
    '2 - 2.1 GHz',
    '2.2 - 2.4 GHz',
    '2.5 & Above',
    'Below 1.5 GHz'
  ]

  brandfunction(){
    this.isopen=!this.isopen;
    console.log("working");
  }

  customerratings(){
    this. israting=!this. israting;
    console.log("working");
  }
  ramcategories(){
    this.isram=!this.isram;
  }
  isinternalstorage(){
    this.isinternal=!this.isinternal;
  }
  isbatterycapacity(){
    this.isbattery=!this.isbatterycapacity;
  }
  isscreensize(){
    this.isscreen=!this.isscreen;
  }
  isprimarycamera(){
    this.isprimary=!this.isprimary;
  }
  issecondarycamera(){
    this.issecondary=!this.issecondary;
  }
  isprocessorbrand(){
    this.isprocess=!this.isprocess;
  }
  specialityfunction(){
    this.isspeciality=!this.isspeciality;
  }
}

