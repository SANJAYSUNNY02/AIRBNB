import { Component } from '@angular/core';
import { Adcarousels } from './home/home';
//  import { CarouselImage, AdCarousel } from './home/home';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedPlace?: Adcarousels;
  showPlaceDetails(adCarousel: Adcarousels): void {
    this.selectedPlace = adCarousel;
  }
  title = 'resortBooking';
}
