const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.type('text/html')
  res.sendfile('public/index.html')
})

module.exports = router
