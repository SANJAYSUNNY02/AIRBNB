import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adcarousel, PlaceDetail } from '../home/home';

@Injectable({
  providedIn: 'root'
})
export class PlaceDetailService {

  constructor( private http: HttpClient) { }
  public fetchDetails():Observable<PlaceDetail[]> {
    return this.http.get<PlaceDetail[]>('https://rentals-c569e-default-rtdb.firebaseio.com/placeDetails.json');
  }
     public updateDetails(placeDetail: PlaceDetail[]):void{
    this.http.put("https://rentals-c569e-default-rtdb.firebaseio.com/placeDetails.json",placeDetail).subscribe();
    this.fetchDetails();
  }
}
