// This file contains the main class as well as the necessary
// decorators for creating the `Auth` component

/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';

/*
 * Auth
 * Component
 */
@Component({
  selector: 'auth',
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./auth.component.html')
  // Load our main `Sass` file into our `Auth` component
  styleUrls: [require('!style!css!sass!./auth.component.scss')],
  providers: [],
  directives: [],
  pipes: []
})
export class Auth {

  constructor() {}
}
