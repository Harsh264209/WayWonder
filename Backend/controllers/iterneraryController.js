
const Itinerary = require('../models/Iternerary');

const getAllItineraries = async (req, res) => {
  try {
    const itineraries = await Itinerary.find();
    res.json(itineraries);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getItineraryById = async (req, res) => {
  try {
    const itinerary = await Itinerary.findById(req.params.id);
    if (!itinerary) {
      return res.status(404).json({ error: 'Itinerary not found' });
    }
    res.json(itinerary);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createItinerary = async (req, res) => {
  try {
    const newItinerary = await Itinerary.create(req.body);
    res.status(201).json(newItinerary);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateItineraryById = async (req, res) => {
  try {
    const updatedItinerary = await Itinerary.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItinerary) {
      return res.status(404).json({ error: 'Itinerary not found' });
    }
    res.json(updatedItinerary);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteItineraryById = async (req, res) => {
  try {
    const deletedItinerary = await Itinerary.findByIdAndDelete(req.params.id);
    if (!deletedItinerary) {
      return res.status(404).json({ error: 'Itinerary not found' });
    }
    res.json(deletedItinerary);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllItineraries,
  getItineraryById,
  createItinerary,
  updateItineraryById,
  deleteItineraryById,
};
