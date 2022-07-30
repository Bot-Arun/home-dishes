const mongoose = require('mongoose')

const userSma = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


module.exports = userSma