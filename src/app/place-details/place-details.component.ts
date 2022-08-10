import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Adcarousel, PlaceDetail } from '../home/home';
import { AdCauroselsService } from '../services/ad-caurosels.service';
import { PlaceDetailService } from '../services/place-detail.service';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.scss']
})
export class PlaceDetailsComponent implements OnInit {
placeDetail?:PlaceDetail;
allCaurosels: Adcarousel[] =[];
id?:string;

  constructor(public adCarouselService:AdCauroselsService,public placeDetailsService:PlaceDetailService,public  router:Router, public activatedroute: ActivatedRoute) { }

  ngOnInit(){
   this.placeDetailsService.fetchDetails().subscribe((placeDetails: PlaceDetail[])=>{
    if(this.id){
      this.placeDetail = placeDetails.filter((placeDetail: PlaceDetail)=> 
      placeDetail.id?.toString() === this.id)[0]
    }
    
   })
    // const adCarouselobservable = this.adCarouselService.fetchPosts();
    

    // // const loginobservable = this.loginService.loggingUser.email;
    // forkJoin({ placeDetailObservable,adCarouselobservable  }).subscribe(({ placeDetailObservable,adCarouselobservable  } ) =>{
    // //  const posts = res?[0]?.posts
    //   this.placeDetail= placeDetailObservable;
    //   this.allCaurosels = placeDetailObservable;
      
      
    //   this.placeDetail = this.placeDetail.filter((placeDetail: PlaceDetail)=> 
    //   placeDetail.id === this.id,
    //   )    

    // })
    this.activatedroute.params.subscribe((params: Params)=>
    this.id = params['id']
    )
  }

}
