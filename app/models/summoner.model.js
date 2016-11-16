// */app/models/summoner.model.js*

// ## Summoner Model

// Note: MongoDB will autogenerate an _id for each Summoner object created

// Grab the Mongoose module
import mongoose from 'mongoose';

// Create a `schema` for the `Summoner` object
let summonerSchema = new mongoose.Schema({
  text: { type : String },
  id: { type : Number },
  profileIconId: { type : Number}
});

// Expose the model so that it can be imported and used in
// the controller (to search, delete, etc.)
export default mongoose.model('Summoner', summonerSchema);
