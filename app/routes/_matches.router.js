// ```
// _matches.route.js
// (c) 2016 David Newman
// david.r.niciforovic@gmail.com
// _matches.route.js may be freely distributed under the MIT license
// ```

// */app/routes/matches/_matches.router.js*

// ## Matches API object

// GET | /api/matches | Get all of the Matches items
// GET | /api/matches/:matches_id |Get a single Matches item by Matches item id
// POST | /api/matches | Create a single Matches item
// DELETE | /api/matches/:matches_id | Delete a single Matches item
// PUT | /api/matches/:matches_id | Update a Matches item with new info

// Load the `Matches` model
import Matches from '../models/match.model';

import * as leaguetn from 'league-typenode';

var tn: leaguetb.LeagueTypenode = new leaguetn.LeagueTypenode('RGAPI-19efd6ff-0624-46a1-b90c-f491801608d0', false);


export default(app, router) => {

  // ### Matches API Routes

  // Define routes for the Matches item API

  router.route('/matches')

  // ### Create a Matches item

  // Accessed at POST http://localhost:8080/api/matches

  // Create a Matches item
  .post((req, res) => {
    // {matchId:req.params.matchId }
    // var matchId = 2054994283;
    console.log("post fired", req.body);
        tn.getMatchById('na', req.body.matchId, false, (err, match) => {
          if (err) {
            res.send(err)
          }
          console.log("This is not the match you are looking for", match);
          Matches.create(match, (err, matches) => {
            if (err)
              res.send(err);
            // DEBUG
            console.log(`Matches created: ${matches}`);
              res.json(matches);
          });
        })
    })



  // ### Get all of the Matches items

  // Accessed at GET http://localhost:8080/api/matches
  .get((req, res) => {
    console.log('get fired');
    // Use mongoose to get all Matches items in the database
    Matches.find((err, matches) => {
      if (err){
        res.send(err);
      }

      console.log(matches,"these are the matches you may be looking for");
      res.json(matches);
    });
  });

}
  // router.route('/matches/:matches_id')

  // ### Get a Matches item by ID

  // Accessed at GET http://localhost:8080/api/matches/:matches_id
  // .get((req, res) => {
  //
  //   // Use mongoose to a single Matches item by id in the database
  //   Matches.findOne(req.params.camelized_id, (err, matches) => {
  //
  //     if (err)
  //       res.send(err);
  //
  //     else
  //       res.json(matches);
  //   });
  // })

  // ### Update a Matches item by ID

  // Accessed at PUT http://localhost:8080/api/matches/:matches_id
  // .put((req, res) => {
  //
  //   // use our Matches model to find the Matches item we want
  //   Matches.findOne({
  //
  //     '_id': req.params.matches_id
  //
  //   }, (err, matches) => {
  //
  //     if (err)
  //       res.send(err);
  //
  //     // Only update a field if a new value has been passed in
  //     if (req.body.text)
  //       matches.text = req.body.text;
  //
  //     // save the Matches item
  //     return matches.save((err) => {
  //
  //       if (err)
  //         res.send(err);
  //
  //       return res.send(matches);
  //
  //     });
  //   });
  // })

  // ### Delete a Matches item by ID

  // Accessed at DELETE http://localhost:8080/api/matches/:matches_id
  // .delete((req, res) => {
  //
  //   // DEBUG
  //   console.log(`Attempting to delete matches with id: ${req.params.matches_id}`);
  //
  //   Matches.remove({
  //
  //     _id: req.params.matches_id
  //   }, (err, matches) => {
  //
  //     if (err)
  //       res.send(err);
  //
  //     console.log('Matches successfully deleted!');
  //
  //     Matches.find((err, matchess) => {
  //       if (err)
  //         res.send(err);
  //
  //       res.json(matchess);
  //     });
  //   });
  // });
// };
