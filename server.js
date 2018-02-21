const express = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')

const db = require('./config/db')
const Event = require('./app/models/event')
const Class = require('./app/models/class')
const Note = require('./app/models/note')
const Score = require('./app/models/score')
const Profile = require('./app/models/profile')
const index = require('./app/routes/index')
const eventRouter = require('./app/routes/eventRouter')
const noteRouter = require('./app/routes/noteRouter')
const classRouter = require('./app/routes/classRouter')
const scoreRouter = require('./app/routes/scoreRouter')
const profileRouter = require('./app/routes/profileRouter')

const app = express()
const port = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/', index)
app.use('/api/events', eventRouter)
app.use('/api/notes', noteRouter)
app.use('/api/class', classRouter)
app.use('/api/scores', scoreRouter)
app.use('/api/profiles', profileRouter)

app.listen(port, () => {
  console.log('We are live on ' + port)
})
