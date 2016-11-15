import {Component} from '@angular/core';

import {SummonerService} from './summoner.service';

// We `import` `http` into our `SummonerService` but we can only
// specify providers within our component
import {HTTP_PROVIDERS} from '@angular/http';

// Import NgFor directive
import {NgFor} from '@angular/common';

import * as d3 from 'd3';

import {Summoner} from './summoner.component';

@Component({
  // HTML tag for specifying this component
  selector: 'summoner',
  // Let Angular 2 know about `Http` and `SummonerService`
  providers: [...HTTP_PROVIDERS, SummonerService],
  template: require('./summoner.html')
})

export class SummonerD3 {

  private summoners: Array<Summoner> = [];

  constructor(public summonerService: SummonerService) {
    console.log('Summoner d3 constructor go!');

    //this.summoners = [];
    summonerService.getAll()
      // `Rxjs`; we subscribe to the response
      .subscribe((res) => {
        console.log(res)
        // Populate our `summoner` array with the `response` data
        this.summoners = res;
        // Reset `summoner` input
      });
  }
}
