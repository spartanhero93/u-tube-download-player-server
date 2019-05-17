const app = require('express')()
const fs = require('fs')
const youtubedl = require('@microlink/youtube-dl')
require('dotenv').config()

app.use('/api', require('./Routes'))

app.listen(3001, () =>
  console.log(`Listening on port 3001`)
)

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
