const mongoose = require('mongoose')

const Accounts = require('../Accounts')
const accountsList = require('../../userList.json').users

const db = require('../../config/mongoose')

db.once('open', () => {
  console.log('mongodb connected!')
  Accounts.create(accountsList)
    .then(() => console.log('done'))
    .catch(() => console.log(error))
})