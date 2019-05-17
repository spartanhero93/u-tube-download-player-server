const youtubedl = require('@microlink/youtube-dl')
const fs = require('fs')

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
      video.pipe(fs.createWriteStream(info._filename))

      return true
    }
  })
}

module.exports = fetchVideos
