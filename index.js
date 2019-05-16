const fs = require('fs')
const youtubedl = require('@microlink/youtube-dl')
require('dotenv').config()

function getVideo (url) {
  const video = youtubedl(url)

  video.on('info', info => {
    fileName = info._filename
    console.log('download started')
    console.log(info._filename)
    console.log(info.size)

    if (info._filename) {
      video.pipe(fs.createWriteStream(info._filename))
    }
  })
}

const re_Zero_url =
  'https://www.youtube.com/watch?v=HdQCWXh3XXU'

getVideo(re_Zero_url)
