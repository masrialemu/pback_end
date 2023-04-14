const mongo = require('mongoose')
const Port = new mongo.Schema({
    name:{type:String},
    url:{type:String},
    git:{type:String},
    live:{type:String},
},{timestamps:true})

module.exports= new mongo.model('portfolios',Port)