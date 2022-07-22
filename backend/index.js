const express = require('express')
const connectToMongo = require('./database')
var cors = require('cors')
const app = express()

connectToMongo();
app.use(cors())

const port = 5000

// Adding middleware to use req.body
app.use(express.json());

// Available routes
app.use('/api/authentication', require('./routes/authentication'));
app.use('/api/question', require('./routes/question'));
app.use('/api/timetable', require('./routes/timetable'));
app.use('/api/paper', require('./routes/paper'));
app.use('/api/answer', require('./routes/answer'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})