const router = require('express').Router()
const fetchVideos = require('../utils')
const fs = require('fs')
const VideoModel = require('../models/videos')

router.get('/getVideos', (req, res) => {
  VideoModel.find({}, (err, list) => {
    err ? console.log(err) : list.length ? res.send(list) : res.send('list empty!')
  })
})

router.get('/stream', (req, res) => {
  const video1 = "./media/test/When You're Suspended From Hogwarts-tAfi0X-cJag.mp4"
  const stat = fs.statSync(video1)
  const { size } = stat
  const range = req.headers.range

  if (range) {
    const parts = range.replace(/bytes=/, '').split('-')
    const start = parseInt(parts[0], 10)
    const end = parts[1] ? parseInt(parts[1], 10) : size - 1
    const chunksize = end - start + 1
    const file = fs.createReadStream(path, { start, end })
    const head = {
      'Content-Range': `bytes ${start}-${end}/${size}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4'
    }
    res.writeHead(206, head)
    file.pipe(res)
  } else {
    const head = {
      'Content-Length': size,
      'Content-Type': 'video/mp4'
    }
    res.writeHead(200, head)
    fs.createReadStream(path).pipe(res)
  }
})

router.post('/:id', async (req, res) => {
  fetchVideos(req.params.id)
})

module.exports = router
