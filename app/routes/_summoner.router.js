// ```
// _summoner.js
// (c) 2016 David Newman
// david.r.niciforovic@gmail.com
// _summoner.js may be freely distributed under the MIT license
// ```

// */app/routes/_summoner.router.js*

// ## Summoner API object

// HTTP Verb  Route                 Description

// GET        /api/summoner             Get all of the summoner items
// GET        /api/summoner/:summoner_id    Get a single summoner item by summoner item id
// POST       /api/summoner             Create a single summoner item
// DELETE     /api/summoner/:summoner_id    Delete a single summoner item
// PUT        /api/summoner/:summoner_id    Update a summoner item with new info

// Load the summoner model
import Summoner from '../models/summoner.model';

export default (app, router) => {

  // ### Summoner API Routes

  // Define routes for the summoner item API

  router.route('/summoner')

    // ### Create a summoner item

    // Accessed at POST http://localhost:8080/api/summoner

    // Create a summoner item
    .post((req, res) => {

      Summoner.create({

        text : req.body.text

      }, (err, summoner) => {

        if (err)
          res.send(err);

        // DEBUG
        console.log(`Summoner created: ${summoner}`);

        Summoner.find((err, summoners) => {
          if(err)
            res.send(err);

          res.json(summoners);
        });
      });
    })

    // ### Get all of the summoner items

    // Accessed at GET http://localhost:8080/api/summoner
    .get((req, res) => {

      // Use mongoose to get all summoner items in the database
      Summoner.find((err, summoner) => {

        if(err)
          res.send(err);

        else
          res.json(summoner);
      });
    });

  router.route('/summoner/:summoner_id')

    // ### Get a summoner item by ID

    // Accessed at GET http://localhost:8080/api/summoner/:summoner_id
    .get((req, res) => {

      // Use mongoose to a single summoner item by id in the database
      Summoner.findOne(req.params.summoner_id, (err, summoner) => {

        if(err)
          res.send(err);

        else
          res.json(summoner);
      });
    })

    // ### Update a summoner item by ID

    // Accessed at PUT http://localhost:8080/api/summoner/:summoner_id
    .put((req, res) => {

      // use our summoner model to find the summoner item we want
      Summoner.findOne({

        '_id' : req.params.summoner_id

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

        _id : req.params.summoner_id
      }, (err, summoner) => {

        if(err)
          res.send(err);

        console.log('Summoner successfully deleted!');

        Summoner.find((err, summoners) => {
          if(err)
            res.send(err);

          res.json(summoners);
        });
      });
    });
};
