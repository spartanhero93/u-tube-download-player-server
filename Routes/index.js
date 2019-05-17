const router = require('express').Router()

module.exports = () => {
  router.get('/download/:id', (req, res) => {
    console.log(req.params.id)
  })
}
