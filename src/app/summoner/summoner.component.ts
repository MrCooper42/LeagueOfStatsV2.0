import {Component} from '@angular/core';

import {SummonerService} from './summoner.service';

import {SummonerD3} from './summonerD3.component'

// We `import` `http` into our `SummonerService` but we can only
// specify providers within our component
import {HTTP_PROVIDERS} from '@angular/http';

// Import NgFor directive
import {NgFor} from '@angular/common';


// Create metadata with the `@Component` decorator
@Component({
    // HTML tag for specifying this component
    selector: 'summoner',
    // Let Angular 2 know about `Http` and `SummonerService`
    providers: [...HTTP_PROVIDERS, SummonerService],
    directives :[],
    template: require('./summoner.html')
})
export class Summoner {

  // Initialize our `summonerData.summoner` to an empty `string`
  summonerData = {
    text: '',
  };

  public stats: Array<Summoner> = [];
  private summoners: Array<Summoner> = [];

  constructor(public summonerService: SummonerService) {
    console.log('Summoner constructor go!');

      //this.summoners = [];
      summonerService.getAll()
        // `Rxjs`; we subscribe to the response
        .subscribe((res) => {
            // Populate our `summoner` array with the `response` data
            this.summoners = res;
            // Reset `summoner` input
            this.summonerData.text = '';
        });
  }

  createSummoner() {

      this.summonerService.createSummoner(this.summonerData)
        .subscribe((res) => {

            // Populate our `summoner` array with the `response` data
            this.summoners = res;
            // Reset `summoner` input
            this.summonerData.text = '';
        });
  }


  summonerStats(data) {
      this.summonerService.summonerStats(data)
        .subscribe((res) => {
          console.log(res, "response on controller")
            // Populate our `summoner` array with the `response` data
            // this.summonerData.stats = res;
            let ps = res[0].playerStatSummaries
            for (let i = 0; i < ps.length; i++){
              if (ps[i].playerStatSummaryType == "Unranked"){
                console.log(ps[i])
                this.stats.push(ps[i])
              }
            }
            

            // this.stats.push(res[0].playerStatSummaries);
            // console.log(this.stats, "this")
            // Reset `summoner` input
        });
  }

  deleteSummoner(id) {

    this.summonerService.deleteSummoner(id)
      .subscribe((res) => {

          // Populate our `summoner` array with the `response` data
          this.summoners = res;
      });
  }
}
