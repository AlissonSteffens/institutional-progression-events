var ObjectID = require('mongodb').ObjectID
module.exports = function (app, db) {
  app.get('/api/events', (req, res) => {
    db.collection('events').find().toArray(function (error, documents) {
      if (error) {
        res.send({'error': 'An error has occurred'})
      }
      res.jsonp(documents)
    })
  })
  app.delete('/api/events/:evento', (req, res) => {
    const id = req.params.evento
    const details = { '_id': new ObjectID(id) }
    db.collection('events').remove(details, (err, item) => {
      if (err) {
        res.send({'error': 'An error has occurred'})
      } else {
        res.send('Event ' + id + ' deleted!')
      }
    })
  })

  app.get('/api/scores/:turma', (req, res) => {
    const turma = req.params.turma
    const details = { 'class': turma }
    db.collection('scores').find(details).toArray(function (error, documents) {
      if (error) {
        res.send({'error': 'An error has occurred'})
      }
      res.jsonp(documents)
    })
  })

  app.post('/api/events', (req, res) => {
    var details = {
      nome: req.body.nome,
      data_inicio: req.body.data_inicio,
      data_fim: req.body.data_fim,
      data_limite: req.body.data_limite,
      pesquisador_extensao: req.body.pesquisador_extensao,
      pesquisador_ensino: req.body.pesquisador_ensino,
      pesquisador_pesquisa: req.body.pesquisador_pesquisa,
      professor_extensao: req.body.professor_extensao,
      professor_ensino: req.body.professor_ensino,
      professor_pesquisa: req.body.professor_pesquisa,
      extensionista_extensao: req.body.extensionista_extensao,
      extensionista_ensino: req.body.extensionista_ensino,
      extensionista_pesquisa: req.body.extensionista_pesquisa
    }
    db.collection('events').insert(details, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' })
      } else {
        res.send(result.ops[0])
      }
    })
  })
}
