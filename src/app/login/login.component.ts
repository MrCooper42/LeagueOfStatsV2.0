// This file contains the main class as well as the necessary
// decorators for creating the `Matches` component

/*
 * Angular 2 decorators and services
 */
import {Component} from '@angular/core';

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
  // matchData = {};
  //
  // private matches: Array<Matches> = [];
  //
  // constructor(public matchesService: MatchesService) {
  //   matchesService.getAll()
  //     .subscribe((res)=>{
  //       this.matches = res;
  //       this.matchData = {};
  //     })
  // }
  //
  // createMatch() {
  //   this.matchesService.createMatch(this.matchData)
  //     .subscribe((res)=>{
  //       this.matches = res;
  //       this.matchData = {};
  //     })
  // }
  //
  // deleteMatch(id) {
  //   this.matchesService.deleteMatch(id)
  //     .subscribe((res)=>{
  //       this.matches = res;
  //     })
  // }
}
