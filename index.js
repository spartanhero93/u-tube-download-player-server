const app = require('express')()
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()
app.use(cors())
app.use('/api', require('./Routes'))

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true },
  () => console.log('Mongoose connected')
)

app.listen(3001, () =>
  console.log(`Listening on port 3001`)
)
