import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adcarousel } from '../home/home';

@Injectable({
  providedIn: 'root'
})
export class AdCauroselsService {

  constructor( private http: HttpClient) { }
  public fetchPosts():Observable<Adcarousel[]> {
    return this.http.get<Adcarousel[]>('https://rentals-c569e-default-rtdb.firebaseio.com/adcarousels.json');
  }
     public updatePosts(adcaurosels: Adcarousel[]):void{
    this.http.put("https://rentals-c569e-default-rtdb.firebaseio.com/adcarousels.json",adcaurosels).subscribe();
    this.fetchPosts();
  }
}
