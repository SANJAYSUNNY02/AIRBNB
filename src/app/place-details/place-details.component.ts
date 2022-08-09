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
@Input() placeDetail:PlaceDetail[]=[];
allCaurosels: Adcarousel[] =[];
id?:number;

  constructor(public adCarouselService:AdCauroselsService,public placeDetailsService:PlaceDetailService,public  router:Router, public activatedroute: ActivatedRoute) { }

  ngOnInit(){
    const placeDetailObservable=this.placeDetailsService.fetchDetails();
    const adCarouselobservable = this.adCarouselService.fetchPosts();
    

    // const loginobservable = this.loginService.loggingUser.email;
    forkJoin({ placeDetailObservable,adCarouselobservable  }).subscribe(({ placeDetailObservable,adCarouselobservable  } ) =>{
    //  const posts = res?[0]?.posts
      this.placeDetail= placeDetailObservable;
      this.allCaurosels = placeDetailObservable;
      
      
      this.placeDetail = this.placeDetail.filter((placeDetail: PlaceDetail)=> 
      placeDetail.id === this.id,
      )    

    })
    this.activatedroute.params.subscribe((params: Params)=>
    this.id = params['id']
    )
  }

}
