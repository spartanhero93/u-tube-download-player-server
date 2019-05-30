const youtubedl = require('@microlink/youtube-dl')
const fs = require('fs')
const VideoModel = require('../models/videos')

const fetchVideos = url => {
  const video = youtubedl(
    'https://www.youtube.com/watch?v=' + url
  )

  video.on('info', info => {
    fileName = info._filename
    console.log('download started')
    console.log(info._filename)
    console.log(info.size)

    if (info._filename) {
      video.pipe(
        fs.createWriteStream(
          `./media/test/${info._filename}`
        )
      )
      const newVideo = new VideoModel({
        title: info._filename
      })
      newVideo.save(error =>
        error
          ? console.log(error)
          : console.log('Save video title!')
      )
    }
  })
}

module.exports = fetchVideos
