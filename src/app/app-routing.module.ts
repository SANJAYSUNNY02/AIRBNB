import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const routes: Routes = [
  {
    path:"",
    component:MainPageComponent
  },
  {
    path:"register",
    component:UserRegistrationComponent
  },
  {
    path:"login",
    component:UserLoginComponent
  },
  {
    path:"home",
    component:HomeComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:"placeDetails/:id",
    component:PlaceDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
