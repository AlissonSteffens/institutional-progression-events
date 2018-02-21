const express = require('express')
const asyncHandler = require('../utils/asyncHandler')
const dbController = require('../controllers/dbController')
const Event = require('../models/event')

const router = express.Router()

router.get('/', async (req, res) => {
  const result = await asyncHandler.handleAsyncMethod(dbController.getSchema, [Event])
  result !== 'error' ? res.send(result) : res.send({'error': 'An error has occurred'})
})

router.get('/:evento', async (req, res) => {
  const result = await asyncHandler.handleAsyncMethod(dbController.getSchemaById, [Event, req.params.evento])
  result !== 'error' ? res.send(result) : res.send({'error': 'An error has occurred'})
})

router.get('/:evento/:usuario/:perfil', async (req, res) => {
  res.type('text/html')
  res.sendfile('public/chart.html')
})

router.delete('/:evento', async (req, res) => {
  const result = await asyncHandler.handleAsyncMethod(dbController.deleteSchema, [Event, req.params.evento])
  result !== 'error' ? res.send(`Event ${req.params.evento} deleted!`) : res.send({'error': 'An error has occurred'})
})

router.post('/', async (req, res) => {
  const result = await asyncHandler.handleAsyncMethod(dbController.createSchema, [Event, req.body])
  result !== 'error' ? res.send(result) : res.send({'error': 'An error has occurred'})
  // console.log('WTF: ')
  // console.log(result)
})

module.exports = router
