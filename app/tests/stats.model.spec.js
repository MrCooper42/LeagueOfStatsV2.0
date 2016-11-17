'use strict';

// import the `mongoose` helper utilities
let utils = require('./utils');
import chai from 'chai';
let should = chai.should();

// import our `Stats` mongoose model
import Stats from '../app/models/stats/stats.model';

describe('Stats: models', () => {

  describe('create()', () => {

    it('should create a new Stats', (done) => {

      // Create a `Stats` object to pass to `Stats.create()``
      let t = {

        text: 'Write better tests... <.<'
      };

      Stats.create(t, (err, createdStats) => {

        // Confirm that that an error does not exist
        should.not.exist(err);

        // verify that the returned `Stats` is what we expect
        createdStats.text.should.equal('Write better tests... <.<');

        // Call done to tell mocha that we are done with this test
        done();
      });
    });
  });
});
