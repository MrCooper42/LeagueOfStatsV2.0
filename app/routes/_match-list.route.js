// ```
// _match-list.route.js
// (c) 2016 David Newman
// david.r.niciforovic@gmail.com
// _match-list.route.js may be freely distributed under the MIT license
// ```

// */app/routes/match-list/_match-list.router.js*

// ## MatchList API object

// GET | /api/match-list | Get all of the MatchList items
// GET | /api/match-list/:matchList_id |Get a single MatchList item by MatchList item id
// POST | /api/match-list | Create a single MatchList item
// DELETE | /api/match-list/:matchList_id | Delete a single MatchList item
// PUT | /api/match-list/:matchList_id | Update a MatchList item with new info

// Load the `MatchList` model
import MatchList from '../models/match-list.model';

export default (app, router) => {

  // ### MatchList API Routes

  // Define routes for the MatchList item API

  router.route('/match-list')

    // ### Create a MatchList item

    // Accessed at POST http://localhost:8080/api/match-list

    // Create a MatchList item
    .post((req, res) => {

      MatchList.create({

        text : req.body.text

      }, (err, matchList) => {

        if (err)
          res.send(err);

        // DEBUG
        console.log(`MatchList created: ${matchList}`);

        MatchList.find((err, matchLists) => {
          if(err)
            res.send(err);

          res.json(matchLists);
        });
      });
    })

    // ### Get all of the MatchList items

    // Accessed at GET http://localhost:8080/api/match-list
    .get((req, res) => {

      // Use mongoose to get all MatchList items in the database
      MatchList.find((err, matchList) => {

        if(err)
          res.send(err);

        else
          res.json(matchList);
      });
    });

  router.route('/match-list/:matchList_id')

    // ### Get a MatchList item by ID

    // Accessed at GET http://localhost:8080/api/match-list/:matchList_id
    .get((req, res) => {

      // Use mongoose to a single MatchList item by id in the database
      MatchList.findOne(req.params.camelized_id, (err, matchList) => {

        if(err)
          res.send(err);

        else
          res.json(matchList);
      });
    })

    // ### Update a MatchList item by ID

    // Accessed at PUT http://localhost:8080/api/match-list/:matchList_id
    .put((req, res) => {

      // use our MatchList model to find the MatchList item we want
      MatchList.findOne({

        '_id' : req.params.matchList_id

      }, (err, matchList) => {

        if (err)
          res.send(err);

        // Only update a field if a new value has been passed in
        if (req.body.text)
          matchList.text = req.body.text;

        // save the MatchList item
        return matchList.save((err) => {

          if (err)
            res.send(err);

          return res.send(matchList);

        });
      });
    })

    // ### Delete a MatchList item by ID

    // Accessed at DELETE http://localhost:8080/api/match-list/:matchList_id
    .delete((req, res) => {

      // DEBUG
      console.log(`Attempting to delete matchList with id: ${req.params.matchList_id}`);

      MatchList.remove({

        _id : req.params.matchList_id
      }, (err, matchList) => {

        if(err)
          res.send(err);

        console.log('MatchList successfully deleted!');

        MatchList.find((err, matchLists) => {
          if(err)
            res.send(err);

          res.json(matchLists);
        });
      });
    });
};
