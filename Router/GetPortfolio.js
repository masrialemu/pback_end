const express= require('express')
const App=express.Router()
const data = require('./../Database/Port')
App.get('/get',async(req,res)=>{
     const Port =await data.find({})
    try {
        await res.status(200).json(Port)
     } catch (error) {
        await res.status(400).json(error)
     }
})

module.exports=App