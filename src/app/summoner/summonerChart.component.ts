import {Component} from '@angular/core';


import {SummonerService} from './summoner.service';

// We `import` `http` into our `SummonerService` but we can only
// specify providers within our component
import {HTTP_PROVIDERS} from '@angular/http';

// Import NgFor directive
import {NgFor} from '@angular/common';


import {Summoner} from './summoner.component';

@Component({
  // HTML tag for specifying this component
  selector: 'summonerChart',
  directives: [],
  providers: [...HTTP_PROVIDERS, SummonerService],
  template: require('./summoner-charts.html')
})
export class SummonerChart {
  // Radar
  public radarChartLabels:string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData:any = [
    {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
  ];
  public radarChartType:string = 'radar';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
