const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ScoreSchema = new Schema({
  class: String
})

mongoose.model('Score', ScoreSchema)
