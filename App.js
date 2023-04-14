const express = require('express')
const mongo = require('mongoose')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())
require('dotenv/config')

const Portfolio = require('./Router/Portfolio')
const getPortfolio = require('./Router/GetPortfolio')
const Post = require('./Router/Post')
const Get = require('./Router/Get')
const Update = require('./Router/Update')
const Delete = require('./Router/Delete')
const Auth = require('./Router/Login')
const Mail = require('./Router/Fead')
mongo.connect(process.env.Pass,{useNewUrlParser:true}).then(console.log('db is conncted'))

app.use('/portfolio',Portfolio)
app.use('/portfolio',getPortfolio)
app.use('/post',Post)
app.use('/get',Get)
app.use("/mail",Mail)
// app.use('/update',Post)
// app.use('/delete',Post)
//jjjjjjjj
// app.use('/login',Post)




app.listen(process.env.Port || 5000,(req,res)=>{
    console.log('The port is working now')
})