const mongoose = require('mongoose')
const { Schema } = mongoose

const VideoSchema = new Schema({
  title: {
    required: true,
    type: String
  }
})

module.exports = VideoModel = mongoose.model(
  'video',
  VideoSchema
)
