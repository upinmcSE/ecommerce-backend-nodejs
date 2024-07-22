const expess = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')
const app = expess()

// init middlewares
app.use(morgan("dev"))
// app.use(morgan("combined"))

app.use(helmet())
app.use(compression())

// init database
require('./db/init.mongodb')

const {checkOverLoad} = require("./helpers/check.connect")
checkOverLoad()

// init router

// handle error

app.get("/", (req, res, next) => {
    const strCompress = "ahuhu"

    return res.status(200).json({
        message: "welcome",
        metadata: strCompress.repeat(10000)
    })
})


module.exports = app