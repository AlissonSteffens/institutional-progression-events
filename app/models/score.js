const mongoose = require('../../config/db')

const ScoreSchema = {
  class: String
}

const Score = mongoose.model('Score', ScoreSchema)

module.exports = Score
