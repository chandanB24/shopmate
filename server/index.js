const express = require("express")
const app = express()
const cors = require('cors')
const {router} = require("./Router/route")

//middlewares
app.use(cors())
app.use(express.json());

app.use("/admin",router)


app.listen(8080,()=>{
    console.log("server is running")
})