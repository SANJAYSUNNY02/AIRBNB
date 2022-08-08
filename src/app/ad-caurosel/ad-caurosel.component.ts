import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Adcarousel, Adcarousels, Image } from '../home/home';
import { AdCauroselsService } from '../services/ad-caurosels.service';
// import { AdCarousel, CarouselImage } from '../home/home';

@Component({
  selector: 'app-ad-caurosel',
  templateUrl: './ad-caurosel.component.html',
  styleUrls: ['./ad-caurosel.component.scss']
})
export class AdCauroselComponent implements OnInit {
  @Input () allCaurosels: Adcarousel[] =[];
   images: Image[]=[];
  // @Output() productClicked = new EventEmitter<Adcarousels>();
  items!:Image[];
  responsiveOptions = [

    {

        breakpoint: '1024px',

        numVisible: 3,

        numScroll: 1

    },

    {

        breakpoint: '768px',

        numVisible: 2,

        numScroll: 2

    },

    {

        breakpoint: '560px',

        numVisible: 1,

        numScroll: 1

    }

  ];


  constructor(public adcauroselService:AdCauroselsService){
    this.adcauroselService.fetchPosts().subscribe((adcarousels: Adcarousel[]) => {
      this.allCaurosels = adcarousels;
  })
  }

  ngOnInit(): void {
 this.items=this.images;
  }
  // public showPlaceDetails(): void{
  //   console.log(this.allCaurosels);
  //   this.productClicked.emit(this.allCaurosels);
  // }
}
