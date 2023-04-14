const express= require('express')
const App=express.Router()
const data = require('./../Database/Port')
App.post('/',async(req,res)=>{
     const Port =await new data({
       name:req.body.name,
       url:req.body.url,
       git:req.body.git,
       live:req.body.live,
     })
     try {
        const Save = await Port.save()
        await res.status(200).json(Port)
     } catch (error) {
        await res.status(400).json(error)
     }
})

module.exports=App