const mongoose = require('mongoose')

const logSma = new mongoose.Schema({
    Idely:{
        type:Number,
        min:0
    },
    Dosa:{
        type:Number,
        min:0
    },
    Pongal:{
        type:Number,
        min:0
    },
    userId:{
        type:String,
        required:true
    }
})

module.exports = logSma;