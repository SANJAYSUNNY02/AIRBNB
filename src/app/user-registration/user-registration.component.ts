import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Users, NewUsers } from '../home/home';
import { UserRegistrationService } from '../services/user-registration.service';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent implements OnInit {
  registrationFormGroup!: FormGroup;
  


  constructor(private fb: FormBuilder, public userRegistrationService:UserRegistrationService,public activatedrout:ActivatedRoute,public router: Router) {}

  ngOnInit(): void {
    this.registrationFormGroup = this.fb.group({
    users:this.fb.array([]),    
    }
      
    );
  }
  get users(): FormArray{
    return (this.registrationFormGroup.get('users')) as FormArray;
  }
addUser(): void{
this.users.push(new FormGroup({
  firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required,Validators.minLength(6),]),
        confirmPassword: new FormControl('', [Validators.required,Validators.minLength(6),])
      
}));
}

  getEmailErrorMessage() {
    if (this.registrationFormGroup.get('email')?.hasError('required')) {
      return 'You must enter a value';
    }

    return this.registrationFormGroup.get('email')?.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  getPasswordErrorMessage() {
    if (this.registrationFormGroup.get('password')?.hasError('required')) {
      return 'You must enter a value';
    }

    return this.registrationFormGroup.get('password')?.hasError('minlength')
      ? 'Password contains atleast 6 Characters'
      : '';
  }
  getConfirmPasswordErrorMessage() {
    if (this.registrationFormGroup.get('confirmPassword')?.hasError('required')) {
      return 'You must enter a value';
    }

    return this.registrationFormGroup.get('confirmPassword')?.hasError('minlength')
      ? 'Password contains atleast 6 Characters'
      : '';
  }

  register(): void {
    console.log("form group",this.registrationFormGroup.value);
    const users: Users[] = [];
    if (this.registrationFormGroup?.value) {
      for (let user of this.registrationFormGroup.value.users) {
        users.push(new Users(user.email,user.password,user.firstName,user.lastName,user.confirmPassword));
      }
      this.userRegistrationService.addUser(new NewUsers(users));
    }
    this.router.navigate(['login']);
  }
}
