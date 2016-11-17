import {Component, OnInit} from '@angular/core';

import {nvD3} from 'ng2-nvd3'
declare let d3: any;

import {SummonerService} from './summoner.service';

// We `import` `http` into our `SummonerService` but we can only
// specify providers within our component
import {HTTP_PROVIDERS} from '@angular/http';

// Import NgFor directive
import {NgFor} from '@angular/common';


import {Summoner} from './summoner.component';

@Component({
  // HTML tag for specifying this component
  selector: 'summonerD3',
  directives: [nvD3],
  providers: [...HTTP_PROVIDERS, SummonerService],
  template:`
  <div>
  <nvd3 [options]="options" [data]="data"></nvd3>
  </div>`
})

export class SummonerD3 implements OnInit {
  options;
  data;
  ngOnInit() {
    this.options = {
      chart: {
        type: 'descreteBarChart',
        height: 450,
        margin: {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function(d) { return d.label; },
        y: function(d) { return d.value; },
        showValues: true,
        valueFormat: function(d) {
          return d3.format(',.4f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'X Axis'
        },
        yAxis: {
          axisLabel: 'Y Axis',
          axisLabelDistance: -10
        }
      }
    }
    this.data = [
      {
        key: "Cumulative Return",
        values: [
          {
            "label": "A",
            "value": -29.765957771107
          },
          {
            "label": "B",
            "value": 0
          },
          {
            "label": "C",
            "value": 32.807804682612
          },
          {
            "label": "D",
            "value": 196.45946739256
          },
          {
            "label": "E",
            "value": 0.19434030906893
          },
          {
            "label": "F",
            "value": -98.079782601442
          },
          {
            "label": "G",
            "value": -13.925743130903
          },
          {
            "label": "H",
            "value": -5.1387322875705
          }
        ]
      }
    ];
  }
}
//
//   private summoners: Array<SummonerD3> = [];
//
//   constructor(public summonerService: SummonerService) {
//     console.log('Summoner d3 constructor go!');
//
//     //this.summoners = [];
//     summonerService.getAll()
//       // `Rxjs`; we subscribe to the response
//       .subscribe((res) => {
//         console.log(res)
//         // Populate our `summoner` array with the `response` data
//         this.summoners = res;
//         // Reset `summoner` input
//       });
//   }
//
//   summonerStats(data) {
//     console.log(data, "data from component summstats")
//     this.summonerService.summonerStats(data)
//       .subscribe((res) => {
//
//         // Populate our `summoner` array with the `response` data
//         this.stats = res;
//         // Reset `summoner` input
//         // this.stats = {};
//       });
//   }
//
// }
