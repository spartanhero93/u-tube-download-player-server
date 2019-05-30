const mongoose = require('mongoose')
const { Schema } = mongoose

const User = new Schema({
  Username: {
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String
  },
  API_KEY: {
    required: true,
    type: String
  }
})

const UserSchema = mongoose.model('user', User)
module.exports = UserSchema
