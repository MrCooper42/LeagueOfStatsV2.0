import {Component} from '@angular/core';

import {SummonerService} from './summoner.service';


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

  summonerName = {
    text: ''
  };

  private summoners: Array<Summoner> = [];
  public matchData: Array<Summoner> = [];
  private matchList: Array<Summoner> = [];

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
          console.log(res[0].playerStatSummaries, "response on controller")
            // Populate our `summoner` array with the `response` data
            // this.summonerData.stats = res;
            let ps = res[0].playerStatSummaries
            for (let i = 0; i < ps.length; i++){
              if (ps[i].playerStatSummaryType == "Unranked"){
                ps[i].summonerId = res[0].summonerId
                this.stats.push(ps[i])
              }
            }
            // Reset `summoner` input
        });
      }
  getSummoner(id){
    this.summonerService.getSummoner(id)
      .subscribe((res) => {

          // Populate our `summoner` array with the `response` data
          this.matchData.push(res);
          // Reset `summoner` input
          // this.summonerName.text = '';
      })

  }

  deleteSummoner(id) {

    this.summonerService.deleteSummoner(id)
      .subscribe((res) => {

          // Populate our `summoner` array with the `response` data
          this.summoners = res;
      });
  }

  updateMatchList(id){
    console.log(id,'component id')
    this.summonerService.updateMatchList(id)
      .subscribe((res) => {

          // Populate our `summoner` array with the `response` data
          this.matchList = res;
          // Reset `summoner` input

      });
  }
}
