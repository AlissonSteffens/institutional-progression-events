const mongoose = require('mongoose')

mongoose.connect('mongodb://server:senha123@ds131826.mlab.com:31826/univali-events', () => {
  console.log('mongodb connected')
})

module.exports = mongoose
