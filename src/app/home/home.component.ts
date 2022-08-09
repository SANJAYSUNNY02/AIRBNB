import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdCauroselsService } from '../services/ad-caurosels.service';
import { Adcarousel } from './home';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input () allCaurosels: Adcarousel[] =[];
  constructor(public adcauroselService:AdCauroselsService,public router: Router){
    this.adcauroselService.fetchPosts().subscribe((adcarousels: Adcarousel[]) => {
      this.allCaurosels = adcarousels;
  })
  }
  ngOnInit(): void {
    
  }
  public showPlaceDetails(adCaurosel:Adcarousel) :void{
    this.router.navigate(['/placeDetails',adCaurosel.id]);
    
  }
  
}
// images: CarouselImage[] = [
  //   {
  //     image: 'assets/carousel.jpg',
  //     description:"maldeeves"
  //   },

  //   {
  //     image: 'assets/carousel1.jpg',
  //   },

  //   {
  //     image: 'assets/carousel2.jpg',
  //   },

  //   {
  //     image: 'assets/carousel3.jpg',
  //   },

  //   {
  //     image: 'assets/carousel4.jpg',
  //   },

  //   {
  //     image: 'assets/carousel5.jpg',
  //   },

  //   {
  //     image: 'assets/carousel6.jpg',
  //   },
  // ];
  // carousels: AdCarousel[] = [
  //   {
  //     title: 'Today’s Deals',

  //     link: 'See all deals',

  //     linkURL:
  //       'https://www.amazon.in/gp/goldbox/?ie=UTF8&ref=nav_topnav_deals&pd_rd_w=iSqj7&pf_rd_p=78c9b567-1104-4e60-a4cc-720319b5249d&pf_rd_r=9PQDEG3G4Z70RRJ9HTG4&pd_rd_r=bb55db65-a764-4b69-b520-b45dd3376f39&pd_rd_wg=a2f6Q&ref_=pd_gw_unk',

  //     images: this.images,
  //   },
  // ];
