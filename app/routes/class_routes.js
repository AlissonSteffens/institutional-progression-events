var ObjectID = require('mongodb').ObjectID
module.exports = function (app, db) {
  app.get('/api/class', (req, res) => {
    db.collection('classes').find().toArray(function (error, item) {
      if (error) {
        res.send({'error': 'An error has occurred'})
      }
      var next = 3
      if (item[0].value !== null && item[0].value !== 'NaN' && item[0].value !== 'undefined' && item[0].value !== undefined) {
        next = (item[0].value + 1)
      }
      const id = '59acc936734d1d25a0f61ac4'
      const details = { '_id': new ObjectID(id) }
      const note = { name: 'next', value: next }
      db.collection('classes').update(details, note, (err, result) => {
        if (err) {
          res.send({'error': 'An error has occurred'})
        } else {
          res.send(note)
        }
      })
    })
  })
}
