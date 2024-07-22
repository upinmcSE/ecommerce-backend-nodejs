const app = require("./src/app");

const PORT = 3333

const server = app.listen(PORT , () => {

    console.log(`AHIHI ${PORT}`)
})

// process.on('SIGINT',() => {
//     server.close( () => console.log(`exits server express`))
// })