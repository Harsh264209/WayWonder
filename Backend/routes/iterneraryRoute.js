

const express = require('express');
const router = express.Router();
const itineraryController = require('../controllers/iterneraryController');

router.get('/', itineraryController.getAllItineraries);
router.get('/:id', itineraryController.getItineraryById);
router.post('/', itineraryController.createItinerary);
router.put('/:id', itineraryController.updateItineraryById);
router.delete('/:id', itineraryController.deleteItineraryById);

module.exports = router;
