// */app/routes/stats/_stats.router.js*

// ## Stats API object

// Load the `Stats` model
import Stats from '../models/stats.model';

export default (app, router) => {

	router.route('/stats')

	// Create a Stats item
	.post((req, res) => {

		Stats.create({

			text: req.body.text

		}, (err, stats) => {

			if (err)
				res.send(err);

			// DEBUG
			console.log(`Stats created: ${stats}`);

			Stats.find((err, statss) => {
				if (err)
					res.send(err);

				res.json(statss);
			});
		});
	})

	// ### Get all of the Stats items

	// Accessed at GET http://localhost:8080/api/stats
	.get((req, res) => {

		// Use mongoose to get all Stats items in the database
		Stats.find((err, stats) => {

			if (err)
				res.send(err);

			else
				res.json(stats);
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
		});
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

			Stats.find((err, statss) => {
				if (err)
					res.send(err);

				res.json(statss);
			});
		});
	});
};
