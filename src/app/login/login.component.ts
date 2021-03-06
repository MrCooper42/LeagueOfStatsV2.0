// This file contains the main class as well as the necessary
// decorators for creating the `Matches` component

/*
 * Angular 2 decorators and services
 */
import {Component, OnInit} from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from "@angular/common";
import {RouteConfig, Router} from '@angular/router-deprecated';
import {LoginService} from './login.service';
import {HTTP_PROVIDERS} from '@angular/http';
/*
 * Matches
 * Component
 */
@Component({
  selector: 'login',
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  providers: [...HTTP_PROVIDERS, LoginService],
  template: require('./login.component.html')
  // Load our main `Sass` file into our `Matches` component
})
export class Login {
  userData = {
    passord:'',
    email:''
  }
  constructor(public loginService:LoginService, public router: Router){
    loginService
  }

  login(){
    this.loginService.login(this.userData)
    .subscribe((res) => {
        // Reset `summoner` input
        this.userData = {
          passord:'',
          email:''
        };
        this.router.navigateByUrl('/summoner')
    });
  }
}
