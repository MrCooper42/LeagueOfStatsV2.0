//our root app component
import {Component} from '@angular/core'
// import {NG2D3Module} from 'ng2d3';
import * as d3 from 'd3'
import {single, multi} from './data';

@Component({
  selector: 'summonerChart',
  template: `
  // <h1>I am here...</h1>
    <advanced-pie-chart
      [view]="view"
      [scheme]="colorScheme"
      [results]="single"
      [gradient]="gradient"
      (clickHandler)="clickHandler($event)">
    </advanced-pie-chart>
  `
})

export class SummonerChart {
  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  // line, area
  autoScale = false;

  constructor() {
    Object.assign(this, {single, multi})
  }

}
