const express = require('express');
const cityController = require('../../controllers/city-controller');
const flightController = require('../../controllers/flight-controller');
const airportController = require('../../controllers/airport-controller');
const { flightMiddleware } = require('../../middleware/index');
const router = express.Router();

router.post('/city',cityController.create);
router.delete('/city/:id',cityController.destroy);
router.patch('/city/:id',cityController.update);
router.get('/city',cityController.getAll);
router.get('/city/:id',cityController.get)

router.post('/flights',flightMiddleware.ValidateCreateFlight,flightController.create);
router.get('/flights',flightController.getAll);
router.get('/flights/:id',flightController.get);

router.post('/airport',airportController.create);
module.exports = router;
 