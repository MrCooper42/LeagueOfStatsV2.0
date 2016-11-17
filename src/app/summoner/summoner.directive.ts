import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {nvD3} from 'ng2-nvd3';

@Component({
  selector: 'summonerD3',
  directives: [nvD3],
  template: `<div><nvd3 [options]="options" [data]="data"></nvd3></div>`
})
export class SummonerD3 {
  options;
  data;

  @ViewChild(summoner)
  nvD3: nvD3;

  ngOnInit(){
    this.options = {...};
    this.data = [...];
  }

  ngAfterViewInit() {
    // this.nvD3 - directive instance
    // for example, to update the chart
    this.nvD3.chart.update()
  }
}
