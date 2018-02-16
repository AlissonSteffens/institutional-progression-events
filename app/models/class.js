const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClassSchema = new Schema({
  name: String,
  value: Number
})

mongoose.model('Classs', ClassSchema)
