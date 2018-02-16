const express = require('express')
const asyncHandler = require('../utils/asyncHandler')
const dbController = require('../controllers/dbController')
const mongoose = require('mongoose')
const Event = mongoose.model('Event')

const router = express.Router()

router.get('/', async (req, res) => {
  const result = await asyncHandler.handleAsyncMethod(dbController.getSchema, [Event])
  result !== 'error' ? res.send(result) : res.send({'error': 'An error has occurred'})
})

router.delete('/:evento', async (req, res) => {
  const result = await asyncHandler.handleAsyncMethod(dbController.deleteSchema, [Event, req.params.evento])
  result !== 'error' ? res.send(`Event ${req.params.evento} deleted!`) : res.send({'error': 'An error has occurred'})
})

router.post('/', async (req, res) => {
  const result = await asyncHandler.handleAsyncMethod(dbController.createSchema, [Event, req.body])
  result !== 'error' ? res.send(result) : res.send({'error': 'An error has occurred'})
})

module.exports = router
