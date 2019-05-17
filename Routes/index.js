const router = require('express').Router()
const fetchVideos = require('../utils')

router.post('/:id', async (req, res) => {
  const result = await fetchVideos(req.params.id)
  result
    ? res.send({ data: 'success' })
    : res.send({ data: 'failure' })
})

module.exports = router
