// This file contains the main class as well as the necessary
// decorators for creating the `Matches` component

/*
 * Angular 2 decorators and services
 */
import {Component} from '@angular/core';

import {MatchesService} from './matches.service';
import {SummonerService} from '../summoner/summoner.service';
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
  providers: [...HTTP_PROVIDERS, MatchesService]
})
export class Matches {
  matchData = {matchId:2054994283};

  private matches: Array<Matches> = [];
  public matchIdList: Array<Matches> = []
  constructor(public matchesService: MatchesService,public summonerService: SummonerService) {
    matchesService.getAll()
      .subscribe((res)=>{
        this.matches = res;
        // this.matchData = {};
      })
    summonerService.
  }

  createMatch() {
    this.matchesService.createMatch(this.matchData)
      .subscribe((res)=>{
        this.matches = res;
        // this.matchData = {};
      })
  }

  deleteMatch(id) {
    this.matchesService.deleteMatch(id)
      .subscribe((res)=>{
        this.matches = res;
      })
  }
}
