import {Component} from '@angular/core';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`About` component loaded asynchronously');

@Component({
  selector: 'about',
  template: `
    <md-card>
      <div class="container text-center">
        <h3>Created and Developed by:<br></h3>
        <h4>Matthew Cooper<br>Scott Van Gilder<br>Zack Dillie<br></h4>
        <p>League of Stats isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.</p>
        <br>
        <h4>What advantage does League of Stats have over any other statistic sites?</h4>
        <p>Most other League of Legends statistic websites are lacking in three areas. First, data doesn't necessarily reflect a champion's true performance if their play in certain roles isn't taken into account - this is something League of Stats is very well equipped for; any champion can be selected in their played role to get tailored statistics. Second, many statistical websites present their data over the past month/week/day. This gives an inaccurate view of the champion on the current patch. This is because the sample size can cover more than the current patch or be too small (in the case of a day). League of Stats bases all data off the current patch apart from the player experience section - which uses the past 2 patches. Third, many statistic websites don't show the win rates when a champion is (potentially) played at their best - League of Stats provides win rates for the best builds, masteries, runes, summoners and skill order.</p>
      </div>
    </md-card>
  `,
})
export class About {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `About` component');
    // static data that is bundled
    //var mockData = require('assets/mock-data/mock-data.json');
    //console.log('mockData', mockData);
    // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
    //this.asyncDataWithWebpack();
  }
  asyncDataWithWebpack() {
    // you can also async load mock data with 'es6-promise-loader'
    // you would do this if you don't want the mock-data bundled
    // remember that 'es6-promise-loader' is a promise
    //var asyncMockDataPromiseFactory = require('es6-promise!assets/mock-data/mock-data.json');
    //setTimeout(() => {

    //  let asyncDataPromise = asyncMockDataPromiseFactory();
    //  asyncDataPromise.then(json => {
    //    console.log('async mockData', json);
    //  });
    //});
  }
}
