const App = require('express').Router()
const Data = require('../Database/Data')
App.get('/',async(req,res)=>{
   const Get = await Data.find()
   try {
    await res.status(200).json(Get)
   } catch (error) {
    await res.status(400).json(error)
   }
})

module.exports=App