const express = require('express')
const {modal} = require("../Modal/db.js")

const router = express.Router()
router.get("/createShop", async (req,res)=>{
const response = modal.create({
    email:"asif@gmail.com"
})
})
module.exports={router}