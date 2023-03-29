const express = require('express')
const router = express.Router()
const flightsController = require('../controller/flightsController')

router.get('/seed', flightsController.seed)

router.get('/', flightsController.index)

router.get('/new', flightsController.new)

router.delete('/clear', flightsController.clear)

router.delete('/:id', flightsController.delete)

router.post('/', flightsController.create)

router.get('/:id', flightsController.show)


// Destinations
router.post('/:id/destinations', flightsController.createDestination)


module.exports = router