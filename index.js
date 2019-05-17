const app = require('express')()
require('dotenv').config()

app.use('/api', require('./Routes'))

app.listen(3001, () =>
  console.log(`Listening on port 3001`)
)
