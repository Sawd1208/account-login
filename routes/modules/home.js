const express = require('express')
const router = express.Router()

const Accounts = require('../../models/Accounts')

router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router