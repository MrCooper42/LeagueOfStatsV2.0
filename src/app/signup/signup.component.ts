// This file contains the main class as well as the necessary
// decorators for creating the `Matches` component

/*
 * Angular 2 decorators and services
 */
import {Component} from '@angular/core';
import {RouteConfig, Router} from '@angular/router-deprecated';
import {SignupService} from './signup.service';
import {HTTP_PROVIDERS} from '@angular/http';
/*
 * Matches
 * Component
 */
@Component({
  selector: 'signup',
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./signup.component.html'),
  // Load our main `Sass` file into our `Matches` component
  providers: [...HTTP_PROVIDERS, SignupService]
})
export class Signup {
  userData = {
    username: '',
    email: '',
    password: ''
  }

  constructor(public signupService:SignupService, public router: Router){
    signupService
  }

  signup(){
    this.signupService.signup(this.userData)
    .subscribe((res) => {
        this.userData = {
          username: '',
          email: '',
          password: ''
        }
        this.router.navigateByUrl('/summoner')
    });
  }
}
