const app = require("./src/app");
require('dotenv').config

const PORT = process.env.PORT || 3334

const server = app.listen(PORT , () => {
    console.log(`AHIHI ${PORT}`)
})

// process.on('SIGINT',() => {
//     server.close( () => console.log(`exits server express`))
// })

module.exports = server