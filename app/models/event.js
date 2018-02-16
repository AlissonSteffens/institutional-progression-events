const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EventSchema = new Schema({
  nome: String,
  data_inicio: String,
  data_fim: String,
  data_limite: String,
  pesquisador_extensao: Number,
  pesquisador_ensino: Number,
  pesquisador_pesquisa: Number,
  professor_extensao: Number,
  professor_ensino: Number,
  professor_pesquisa: Number,
  extensionista_extensao: Number,
  extensionista_ensino: Number,
  extensionista_pesquisa: Number
})

mongoose.model('Event', EventSchema)
