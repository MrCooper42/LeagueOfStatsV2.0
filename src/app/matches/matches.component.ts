// This file contains the main class as well as the necessary
// decorators for creating the `Matches` component

/*
 * Angular 2 decorators and services
 */
import {Component} from '@angular/core';

import {MatchesService} from './matches.service';
import {HTTP_PROVIDERS} from '@angular/http';
/*
 * Matches
 * Component
 */
@Component({
  selector: 'matches',
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./matches.component.html'),
  // Load our main `Sass` file into our `Matches` component
  providers: [...HTTP_PROVIDERS, MatchesService],
  directives: [],
  pipes: []
})
export class Matches {
  matchData = {};

  private matches: Array<Matches> = [];

  constructor(public matchesService: MatchesService) {
    matchesService.getAll()
      .subscribe((res)=>{
        this.matches = res;
        this.matchData = {};
      })
  }

  createMatch() {
    this.matchesService.createMatch(this.matchData)
      .subscribe((res)=>{
        this.matches = res;
        this.matchData = {};
      })
  }

  deleteMatch(id) {
    this.matchesService.deleteMatch(id)
      .subscribe((res)=>{
        this.matches = res;
      })
  }
}
