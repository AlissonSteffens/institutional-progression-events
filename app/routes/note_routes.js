var ObjectID = require('mongodb').ObjectID
module.exports = function (app, db) {
  app.get('/api/notes', (req, res) => {
    db.collection('notes').find().toArray(function (error, documents) {
      if (error) {
        res.send({'error': 'An error has occurred'})
      }
      res.jsonp(documents)
    })
  })

  app.get('/api/notes/:id', (req, res) => {
    const id = req.params.id
    const details = { '_id': new ObjectID(id) }
    db.collection('notes').findOne(details, (err, item) => {
      if (err) {
        res.send({'error': 'An error has occurred'})
      } else {
        res.send(item)
      }
    })
  })

  app.post('/api/notes', (req, res) => {
    const note = { text: req.body.body, title: req.body.title }
    db.collection('notes').insert(note, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' })
      } else {
        res.send(result.ops[0])
      }
    })
  })

  app.delete('/api/notes/:id', (req, res) => {
    const id = req.params.id
    const details = { '_id': new ObjectID(id) }
    db.collection('notes').remove(details, (err, item) => {
      if (err) {
        res.send({'error': 'An error has occurred'})
      } else {
        res.send('Note ' + id + ' deleted!')
      }
    })
  })

  app.put('/api/notes/:id', (req, res) => {
    const id = req.params.id
    const details = { '_id': new ObjectID(id) }
    const note = { text: req.body.body, title: req.body.title }
    db.collection('notes').update(details, note, (err, result) => {
      if (err) {
        res.send({'error': 'An error has occurred'})
      } else {
        res.send(note)
      }
    })
  })
}
