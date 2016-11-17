// This file contains the main class as well as the necessary
// decorators for creating the `Matches` component

/*
 * Angular 2 decorators and services
 */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import {LoginService} from './login.service';
import {HTTP_PROVIDERS} from '@angular/http';
/*
 * Login
 * Component
 */
@Component({
  selector: 'matches',
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./login.component.html'),
  // Load our main `Sass` file into our `Matches` component
  providers: [...HTTP_PROVIDERS, LoginService],
  directives: [],
  pipes: []
})
export class Login {
  myForm: FormGroup;
    error = false;
    errorMessage = '';

    constructor(private fb: FormBuilder, private authService: AuthService) {}

    onSignin() {
      this.authService.signinUser(this.myForm.value);
    }

    ngOnInit():any {
        this.myForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }
}
