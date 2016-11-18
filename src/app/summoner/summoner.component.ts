import {Component} from '@angular/core';

import {SummonerService} from './summoner.service';

import * as d3 from 'd3'

import {HTTP_PROVIDERS} from '@angular/http';

import {NgFor} from '@angular/common';

const width = 400;
const height = 300;
const padding = 100;
const barPadding = 5;


@Component({
  selector: 'summoner',
  providers: [...HTTP_PROVIDERS, SummonerService],
  directives: [],
  template: require('./summoner.html')
})
export class Summoner {

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
        const svg = d3.select('body')
          .append('svg')
          .attr('width', width)
          .attr('height', height)
          .style('padding', padding)
        this.summoners = res;
        this.summonerData.text = '';
      });
  }

  createSummoner() {

    this.summonerService.createSummoner(this.summonerData)
      .subscribe((res) => {
        this.summoners = res;
        this.summonerData.text = '';
      });
  }



  summonerStats(data) {
    this.summonerService.summonerStats(data)
      .subscribe((res) => {
        let ps = res[0].playerStatSummaries
        for (let i = 0; i < ps.length; i++) {
          if (ps[i].playerStatSummaryType == "Unranked") {
            ps[i].summonerId = res[0].summonerId
            this.stats.push(ps[i])
          }
        }
      });
  }
  getSummoner(id) {
    this.summonerService.getSummoner(id)
      .subscribe((res) => {
        this.matchData.push(res);
      })
  }

  deleteSummoner(id) {

    this.summonerService.deleteSummoner(id)
      .subscribe((res) => {

        // Populate our `summoner` array with the `response` data
        this.summoners = res;
      });
      }

  updateMatchList(id) {
    console.log(id, 'component id')
    this.summonerService.updateMatchList(id)
      .subscribe((res) => {

        // Populate our `summoner` array with the `response` data
        this.matchList = res;
        // Reset `summoner` input

      });
  }
}
