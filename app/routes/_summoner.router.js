// */app/routes/_summoner.router.js*

// ## Summoner API object

// Load the summoner model
import Summoner from '../models/summoner.model';

import * as leaguetn from 'league-typenode';

var tn: leaguetb.LeagueTypenode = new leaguetn.LeagueTypenode('RGAPI-19efd6ff-0624-46a1-b90c-f491801608d0', false);

export default (app, router) => {

  // ### Summoner API Routes

  // Define routes for the summoner item API

  router.route('/summoner')

  // ### Create a summoner item

  // Accessed at POST http://localhost:8080/api/summoner

  // Create a summoner item
  .post((req, res, next) => {

    var query = Summoner.find({
      text: req.body.text
    })

    query.exec((err, summoned) => {
      console.log(summoned[0], 'XXXXXXXXXXXXXXXXXXXXXXXXX');
      if (!summoned.length) { //there is no user
        let sumName = req.body.text.replace(' ', '').toLowerCase().trim();
        tn.getSummonerByNames("na", sumName, (err, json) => {
          if (err) {
            res.send(err)
          }
          console.log(json, json[sumName].name, json[sumName].id, "full, name, id");
          Summoner.create({
            text: req.body.text,
            id: json[sumName].id,
            profileIconId: json[sumName].profileIconId,
            matchList: []
          }, (err, summoner) => {
            if (err) {
              res.send(err);
            }
            console.log(`Summoner created: ${summoner}`);

            Summoner.find((err, summoners) => {
              if (err) {
                res.send(err);
              }
              console.log(summoners, "summoners outside sent back");
              res.json(summoners);
            })
          });
        })
      } else {
        Summoner.find((err, summoners) => {
          if (err) {
            res.send(err);
          }
          console.log(summoners, "summoners outside sent back");
          res.json(summoners);
        })
      }
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
    });
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
    });
  })

  // ### Update a summoner item by ID

  // Accessed at PUT http://localhost:8080/api/summoner/:summoner_id
  .put((req, res) => {
    console.log(req.body,"req.body Boo");
    var query = Summoner.find({
      _id: req.params.summoner_id
    })

    query.exec((err, summoned) => {
        var summonerMatchList = [];
        console.log(summoned, 'XXXXXXXXXXXXXXXXXXXXXXXXX');
        if (summoned.length) {

          tn.getMatchesBySummonerId("na", summoned.id, 'SEASON2016', (err, matchlist) => {
            if (err) {
              res.send(err)
            }
            for (var x = (matchlist.matches.length - 10); x < matchlist.matches.length; x++) {
              console.log('matchlist.matches[x].matchId', matchlist.matches[x].matchId);
              summonerMatchList.push(matchlist.matches[x].matchId)
            }
            console.log(summonerMatchList, "summonerMatchList baby");
            return summoner.save((err) => {

              if (err)
                res.send(err);

              return res.json(summoner);

            });
          })
        } else {
          Summoner.find((err, summoners) => {
            if (err) {
              res.send(err);
            }
            console.log(summoners, "summoners outside sent back");
            res.json(summoners);
          })
        }
      })
      // use our summoner model to find the summoner item we want
      // Summoner.findOne({
      //
      //   '_id': req.params.summoner_id
      //
      // }, (err, summoner) => {
      //
      //   if (err)
      //     res.send(err);
      //
      //   // Only update a field if a new value has been passed in
      //   var summonerMatchList = [];
      //   tn.getMatchesBySummonerId("na",summoner.id,'SEASON2016',(err,matchlist)=>{
      //     if(err){
      //       res.send(err)
      //     }
      //     for(var x = (matchlist.matches.length - 10); x < matchlist.matches.length; x++){
      //       console.log('matchlist.matches[x].matchId',matchlist.matches[x].matchId);
      //       summonerMatchList.push(matchlist.matches[x].matchId)
      //     }
      //     console.log(summonerMatchList,"summonerMatchList baby");
      //   })
      //
      //   // save the summoner item
      //   return summoner.save((err) => {
      //
      //     if (err)
      //       res.send(err);
      //
      //     return res.send(summoner);
      //
      //   });
      // });
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
