// *src/app/app.ts*

// This file contains the main class as well as the necessary
// decorators for creating the primary `app` `component`

/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig, Router} from '@angular/router-deprecated';

import * as d3 from 'd3';

import {AppState} from './app.service';

import {RouterActive} from './shared/directives/router-active/router-active.directive';

import {Home} from './home';

// Import NgFor directive
import {NgFor} from '@angular/common';

// Import Login component
import {Login} from './login/login.component';

// Import Signup component
import {Signup} from './signup/signup.component';

// Import Summoner component
import {Summoner} from './summoner/summoner.component';

import {SummonerChart} from './chartsss/summonerChart.component'

// Import Matches component
import {Matches} from './matches/matches.component';

// Import SummonerD3 component
// import {SummonerD3} from './summoner/summonerD3.component';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  providers: [  ],
  directives: [ Summoner,
                SummonerChart,
                Matches,
                NgFor,
                RouterActive],
  encapsulation: ViewEncapsulation.None,
  pipes: [],
  // Load our main `Sass` file into our `app` `component`
  styleUrls: [require('!style!css!sass!../sass/main.scss')],
  template: `
    <md-content>
      <md-toolbar color="primary">
          <span style=""><img src="assets/img/League-of-Legends.png" alt="League of Legends" height="42" width="84"><img src="assets/img/League\ of\ Stats.png" alt="League of Stats" height="48" width="175"></span>
          <span class="fill"></span>
          <button md-button router-active [routerLink]=" ['Login'] ">
            Login
          </button>
          <button md-button router-active [routerLink]=" ['Signup'] ">
            Signup
          </button>
          <button md-button router-active [routerLink]=" ['Summoner'] ">
            Summoner
          </button>
          <button md-button router-active [routerLink]=" ['SummonerChart'] ">
            Chart
          </button>
          <button md-button router-active [routerLink]=" ['About'] ">
            About
          </button>
      </md-toolbar>

      <md-progress-bar mode="indeterminate" color="primary" *ngIf="loading">
      </md-progress-bar>

      <router-outlet></router-outlet>

      <footer>
        <img src="assets/img/League-of-Legends-PNG.png" alt="League of Legends" height="100" width="100">
        <span><h2><strong>League of Stats</strong></h2></span>
      </footer>
    </md-content>
  `
})
@RouteConfig([
  { path: '/', name: 'Index', component: Home, useAsDefault: true },
  { path: '/home',  name: 'Home',  component: Home },
  { path: '/login', component: Login, name: 'Login' },
  { path: '/signup', component: Signup, name: 'Signup' },
  { path: '/summoner', component: Summoner, name: 'Summoner' },
  // { path: '/summonerCharts', component: SummonerChart, name: 'Charts' },
  { path: '/summonerCharts', component: SummonerChart, name: 'SummonerChart' },
  // { path: '/redux', component: SummonerD3, name: 'SummonerD3' },
  // Async load a component using Webpack's require with
  // es6-promise-loader and webpack `require`
  { path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About') },
])
export class App {
  angularLogo = 'assets/img/League-of-Legends.png';
  name = 'League of Stats';
  url = '';

  // Pass in our application `state`
  // Alternative to using `redux`
  constructor(public appState: AppState) {}

  // Fire off upon initialization
  ngOnInit() {

    console.log('Initial App State', this.appState.state);
  }
}
