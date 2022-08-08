import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../home/home';
import { UserLoginService } from '../services/user-login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  hide = true;
  users?:Users[];
  loginBoxFormGroup!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public activatedrout: ActivatedRoute,
    public router: Router,
    public userLoginService:UserLoginService
   
  ) {}

  ngOnInit(): void {
    this.loginBoxFormGroup = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  // email = new FormControl('', [Validators.required, Validators.email]);
  // password= new FormControl('',[Validators.required,Validators.minLength(6)]);

  getEmailErrorMessage() {
    if (this.loginBoxFormGroup.get('email')?.hasError('required')) {
      return 'You must enter a value';
    }

    return this.loginBoxFormGroup.get('email')?.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if (this.loginBoxFormGroup.get('password')?.hasError('required')) {
      return 'You must enter a value';
    }

    return this.loginBoxFormGroup.get('password')?.hasError('minlength') ? 'Password contains atleast 6 Characters' : '';
  }

  login(): void {
    if (this.loginBoxFormGroup?.value) {
      const email = this.loginBoxFormGroup.get('email');
      const password = this.loginBoxFormGroup.get('password');
      if (email && password) {
        this.userLoginService.updateLoginUser(email.value, password.value);
      }
    }
    this.router.navigate(["home"]);
  }

  



}
