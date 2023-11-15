const express = require('express')
const {add_owner} = require('../Controller/functions')

const router = express.Router()
router.post("/add_owner",add_owner)
module.exports={router}