'use strict'

const AccessService = require("../services/access.service")

class AccessController {

    signUp = async ( req, res, next) => {
        try {
            console.log(`[P] :: signUp ::`, req.body)

            if (!req.body) {
                console.log("No body received");
            }

            return res.status(201).json(await AccessService.signUp(req.body))
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new AccessController()