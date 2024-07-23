'use strict'

const express = require('express')
const accessController = require('../../controllers/access.controller')
const { apiKey, permission } = require('../../auth/checkAuth')
const router = express.Router()

// check apiKey

router.use(apiKey)

// check permission

router.use(permission('0000'))



router.post('/shop/signup', accessController.signUp)

module.exports = router