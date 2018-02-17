const mongoose = require('../../config/db')

const ClassSchema = {
  name: String,
  value: Number
}

const Classs = mongoose.model('Classs', ClassSchema)

module.exports = Classs