const mongoose = require('../../config/db')

const ProfileSchema = {
  id: Number,
  title: String
}

const Profile = mongoose.model('Profile', ProfileSchema)

module.exports = Profile
