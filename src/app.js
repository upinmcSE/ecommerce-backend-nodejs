require('dotenv').config
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')
const app = express()

// init middlewares
app.use(morgan("dev"))
// app.use(morgan("combined"))

app.use(helmet())
app.use(compression())

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// init database
require('./db/init.mongodb')

const {checkOverLoad} = require("./helpers/check.connect")
//checkOverLoad()


// init router

app.use('/v1/api',require('./routes/access/index'))

// handle error


module.exports = app