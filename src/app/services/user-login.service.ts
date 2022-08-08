import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NewUsers, Users } from '../home/home';
import { UserRegistrationService } from './user-registration.service';


@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  user?: Users;
  users?: NewUsers;

  loggingUser:Users= {} as Users;

  constructor(private userRegistrationService:UserRegistrationService , public router: Router) {
    this.userRegistrationService.getUsers().subscribe((users:NewUsers)=>{this.users=users})
  }
  public validate(): boolean {
    const users = this.users;
    if(users?.users){
      const index = users.users.findIndex(
        (user: Users) =>
          user.email === this.loggingUser.email &&
          user.password === this.loggingUser?.password
      );
      if (index !== -1) {
        this.user = users.users[index];
        return true;
      } else {
        return false;
      }
    }
    return false;
    }


  updateLoginUser(email: string, password: string) {
    this.loggingUser.email = email;
    this.loggingUser.password = password;
    this.router.navigate(["/home"]);
    
  }
}
