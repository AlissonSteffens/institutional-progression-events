const mongoose = require('../../config/db')

const NoteSchema = {
  text: String,
  title: String
}

const Note = mongoose.model('Note', NoteSchema)

module.exports = Note
