module.exports = function (app, db) {
  app.get('/', (req, res) => {
    res.type('text/html')
    res.sendfile('public/index.html')
  })
}
