// */app/routes/stats/_stats.router.js*

// ## Stats API object

// Load the `Stats` model
import Stats from '../models/stats.model';
// Load the `Summoner` model
import Summoner from '../models/summoner.model';

import * as leaguetn from 'league-typenode';

const tn : leaguetb.LeagueTypenode = new leaguetn.LeagueTypenode('RGAPI-19efd6ff-0624-46a1-b90c-f491801608d0', false);

export default(app, router) => {

  router.route('/stats')

  // Create a Stats item
    .post((req, res) => {

    let query = Stats.find({summonerId: req.body.id})

    query.exec((err, summoned) => {
      console.log(summoned, summoned.length, "summ summLen");
      console.log(summoned, "query exec summoned");
      if (!summoned.length) { //never been queried
        let sumID = req.body.id
        tn.getSummaryBySummonerId("na", sumID, "SEASON2016", (err, json) => {
          if (err) {
            res.send(err)
          }
          Stats.create(json, (err, stats) => {

            if (err) {
              res.send(err);
            }

            console.log(`Stats created: ${stats}`);

            Stats.find((err, stats) => {
              if (err) {
                res.send(err);
              }
              console.log(stats, "stats being created");
              res.json(stats);
            });
          });
        })
      } else {
        Stats.find({
          summonerId: req.body.id
        }, (err, stats) => {
          if (err) {
            res.send(err);
          }
          console.log(stats, "stats being sent");
          res.json(stats);
        });
      }
    })
  })

  // ### Get all of the Stats items

  // Accessed at GET http://localhost:8080/api/stats
    .get((req, res) => {

    // Use mongoose to get all Stats items in the database
    Stats.find((err, stats) => {

      if (err) {
        res.send(err);
      } else {
        res.json(stats);
      }
    });
  });

  router.route('/stats/:stats_id')

  // ### Get a Stats item by ID

  // Accessed at GET http://localhost:8080/api/stats/:stats_id
    .get((req, res) => {

    // Use mongoose to a single Stats item by id in the database
    Stats.findOne(req.params.camelized_id, (err, stats) => {

      if (err)
        res.send(err);

else
        res.json(stats);
      }
    );
  })

  // ### Update a Stats item by ID

  // Accessed at PUT http://localhost:8080/api/stats/:stats_id
    .put((req, res) => {

    // use our Stats model to find the Stats item we want
    Stats.findOne({

      '_id': req.params.stats_id

    }, (err, stats) => {

      if (err)
        res.send(err);

      // Only update a field if a new value has been passed in
      if (req.body.text)
        stats.text = req.body.text;

      // save the Stats item
      return stats.save((err) => {

        if (err)
          res.send(err);

        return res.send(stats);

      });
    });
  })

  // ### Delete a Stats item by ID

  // Accessed at DELETE http://localhost:8080/api/stats/:stats_id
    .delete((req, res) => {

    // DEBUG
    console.log(`Attempting to delete stats with id: ${req.params.stats_id}`);

    Stats.remove({

      _id: req.params.stats_id
    }, (err, stats) => {

      if (err)
        res.send(err);

      console.log('Stats successfully deleted!');

      Stats.find((err, stats) => {
        if (err)
          res.send(err);

        res.json(stats);
      });
    });
  });
};
