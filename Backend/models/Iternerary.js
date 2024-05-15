
const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  // destination: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination' },
  destination:{type:String},
  startDate: Date,
  endDate: Date,
});

const Itinerary = mongoose.model('Itinerary', itinerarySchema);

module.exports = Itinerary;
