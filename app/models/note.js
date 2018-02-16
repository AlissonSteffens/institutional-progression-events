const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NoteSchema = new Schema({
  text: String,
  title: String
})

mongoose.model('Note', NoteSchema)
