const express = require('express')
const asyncHandler = require('../utils/asyncHandler')
const dbController = require('../controllers/dbController')
const Profile = require('../models/profile')

const router = express.Router()

router.get('/', async (req, res) => {
  const result = await asyncHandler.handleAsyncMethod(dbController.getSchema, [Profile])
  result !== 'error' ? res.send(result) : res.send({'error': 'An error has occurred'})
})

router.get('/:perfil', async (req, res) => {
  const result = await asyncHandler.handleAsyncMethod(dbController.getSchemaById, [Profile, req.params.perfil])
  result !== 'error' ? res.send(result) : res.send({'error': 'An error has occurred'})
})

module.exports = router
