'use strict'

const mongoose = require('mongoose')
const os = require('os')
const process = require('process')

const _SECONDS = 5000

// count Connect
const countConnection = () => {
    const numConnection = mongoose.connections.length
    console.log(`number : ${numConnection}`)
}

// check over load
const checkOverLoad = () => {
    setInterval( () => {
        const numConnection = mongoose.connections.length
        const numCores = os.cpus().length
        const memoryUsage = process.memoryUsage().rss

        // example maximum number of connections based on osf cores
        const maxConnections = numCores * 5

        console.log(`Active connections: ${numConnection}`)
        console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`)

        if(numConnection > maxConnections){
            console.log(`connection overload detected`)
        }
    }, _SECONDS) // monitor every 5 seconds
}

module.exports = {
    countConnection,
    checkOverLoad
}