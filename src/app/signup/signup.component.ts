// This file contains the main class as well as the necessary
// decorators for creating the `Signup` component

/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';

/*
 * Signup
 * Component
 */
@Component({
  selector: 'signup',
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./signup.component.html')
  // Load our main `Sass` file into our `Signup` component
  styleUrls: [require('!style!css!sass!./signup.component.scss')],
  providers: [],
  directives: [],
  pipes: []
})
export class Signup {

  constructor() {}
}
