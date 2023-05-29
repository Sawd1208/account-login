const express = require('express')
const router = express.Router()

const Accounts = require('../../models/Accounts')

router.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password

  Accounts.findOne(req.body)
    .lean()
    .then(data => {
      if (data) {
        return res.render('login', { firstName: data.firstName })
      }
      return res.render('error')
    })
    .catch((error) => console.log(error))

})

module.exports = router