const {modal} = require("../Modal/db.js")

const add_owner =async(req,res)=>{
    try{
        const response = modal.create({
            email:req.body.email,
            name:req.body.name,
        })
        if(response){
            res.status(201).json({message:"success"})
        }else{
            res.status(500).json({error:"Unsuccessfull"})
        }
    }catch{
        console.log("failed to insert data")
    }
   
}

module.exports={add_owner}