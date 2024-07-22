'use strict'

//const { config } = require("dotenv")



// level 0
// const config = {
//     app: {
//         port:3333
//     },
//     db: {
//         host:'localhost',
//         port:27017,
//         name:"shopApp"
//     }
// }


// level 1

const dev = {
    app: {
        port:process.env.DEV_APP_PORT || 3333
    },
    db: {
        host:process.env.DEV_DB_HOST || 'localhost',
        port:process.env.DEV_APP_PORT || 27017,
        name:process.env.DEV_DB_NAME || 'shopDEV'
    }
}


const production = {
    app: {
        port:process.env.PRO_APP_PORT || 3333
    },
    db: {
        host:process.env.PRO_DB_HOST || 'localhost',
        port:process.env.PRO_DB_PORT || 27017,
        name:process.env.PRO_DB_NAME || 'shopPRO'
    }
}

const config = {dev, production}
const env = process.env.NODE_ENV || 'dev'

module.exports = config[env]