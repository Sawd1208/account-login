const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const accounts = require('./modules/accounts')

router.use('/', home)
router.use('/', accounts)


module.exports = router