// */app/routes/_summoner.router.js*

// ## Summoner API object

// Load the summoner model
import Summoner from '../models/summoner.model';

import * as leaguetn from 'league-typenode';

var tn : leaguetb.LeagueTypenode = new leaguetn.LeagueTypenode('RGAPI-19efd6ff-0624-46a1-b90c-f491801608d0', false);

export default(app, router) => {

  // ### Summoner API Routes

  // Define routes for the summoner item API

  router.route('/summoner')

  // ### Create a summoner item

  // Accessed at POST http://localhost:8080/api/summoner

  // Create a summoner item
    .post((req, res) => {

    Summoner.find({
      text: req.body.text
    }, (err, summoners) => {
      console.log(summoners, "summoners avaliable??????");
      if (!summoners.text) {
        tn.getSummonerByNames("na", req.body.text, (err, summoner) => {
          if (err) {
            res.send(err)
          }
          Summoner.create({
            text: req.body.text,
            id: summoners.id,
            profileIconId: 1211
          }, (err, summoner) => {

            if (err)
              res.send(err);

            // DEBUG
            console.log(`Summoner created: ${summoner}`);

          });
        })
      }

      if (err)
        res.send(err);

      console.log(summoners, " summoners inside api call");
      // res.json(summoners);
    })
    
  })

  // ### Get all of the summoner items

  // Accessed at GET http://localhost:8080/api/summoner
    .get((req, res) => {
    // Use mongoose to get all summoner items in the database
    Summoner.find((err, summoner) => {

      if (err) {
        res.send(err);
      } else
        //make matchList query here
        res.json(summoner);
      }
    );
  });

  router.route('/summoner/:summoner_id')

  // ### Get a summoner item by ID

  // Accessed at GET http://localhost:8080/api/summoner/:summoner_id
    .get((req, res) => {

    // Use mongoose to a single summoner item by id in the database
    Summoner.findOne(req.params.summoner_id, (err, summoner) => {

      if (err)
        res.send(err);

else
        res.json(summoner);
      }
    );
  })

  // ### Update a summoner item by ID

  // Accessed at PUT http://localhost:8080/api/summoner/:summoner_id
    .put((req, res) => {

    // use our summoner model to find the summoner item we want
    Summoner.findOne({

      '_id': req.params.summoner_id

    }, (err, summoner) => {

      if (err)
        res.send(err);

      // Only update a field if a new value has been passed in
      if (req.body.text)
        summoner.text = req.body.text;

      // save the summoner item
      return summoner.save((err) => {

        if (err)
          res.send(err);

        return res.send(summoner);

      });
    });
  })

  // ### Delete a summoner item by ID

  // Accessed at DELETE http://localhost:8080/api/summoner/:summoner_id
    .delete((req, res) => {

    // DEBUG
    console.log(`Attempting to delete summoner with id: ${req.params.summoner_id}`);

    Summoner.remove({

      _id: req.params.summoner_id
    }, (err, summoner) => {

      if (err)
        res.send(err);

      console.log('Summoner successfully deleted!');

      Summoner.find((err, summoners) => {
        if (err)
          res.send(err);

        res.json(summoners);
      });
    });
  });
};
