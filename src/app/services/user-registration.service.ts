import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Users, NewUsers } from '../home/home';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  users: BehaviorSubject<Users[]>;
  users$: Observable<Users[]>;

  constructor(public httpClient:HttpClient) { 
    this.users= new BehaviorSubject<Users[]>([]);
    this.users$= this.users.asObservable();
  }

  public addUser(users: NewUsers):void{
    this.httpClient.patch("https://rentals-c569e-default-rtdb.firebaseio.com/users.json",users).subscribe();
    this.users.next(users.users);

  }
public getUsers():Observable<NewUsers>{
  // return this.users.value;
  return this.httpClient.get<NewUsers>("https://rentals-c569e-default-rtdb.firebaseio.com/users.json");
}
}
