'use strict';

// import the `mongoose` helper utilities
let utils = require('./utils');
import chai from 'chai';
let should = chai.should();

// import our `Summoner` mongoose model
import Summoner from '../app/models/todo.model';

describe('Summoner: models', () => {

  describe('create()', () => {

    it('should create a new Summoner', (done) => {

      // Create a `Summoner` object to pass to `Summoner.create()``
      let t = {

        text: 'Write better tests... <.<'
      };

      Summoner.create(t, (err, createdSummoner) => {

        // Confirm that that an error does not exist
        should.not.exist(err);

        // verify that the returned `todo` is what we expect
        createdSummoner.text.should.equal('Write better tests... <.<');

        // Call done to tell mocha that we are done with this test
        done();
      });
    });
  });
});
