// This file contains the main class as well as the necessary
// decorators for creating the `Matches` component

/*
 * Angular 2 decorators and services
 */
import {Component} from '@angular/core';

import {LoginService} from './login.service';
import {HTTP_PROVIDERS} from '@angular/http';
/*
 * Matches
 * Component
 */
@Component({
  selector: 'login',
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./login.component.html'),
  // Load our main `Sass` file into our `Matches` component
  providers: [...HTTP_PROVIDERS, LoginService]
})
export class Login {

}
