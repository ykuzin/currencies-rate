require('dotenv').config()

const express = require('express')
const { connect } = require('mongoose')
const bodyParser = require('body-parser')

const router = require('./router')

const { MONGO_URI, PORT = 3000 } = process.env

const mongoConnectionOptions = require('./config')

connect(MONGO_URI, mongoConnectionOptions).then(() =>
  console.log('Connected to db')
)

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

app.use(router)

// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
