// import mongoose from "mongoose"
// import logCtrl from '../models/logSma'
const mongoose = require('mongoose') 
const logSma = require('../models/logSma')
const Joi = require('joi') 
const Logs = mongoose.model('Logs',logSma);
const logValidation = Joi.object({
    Idley:Joi.number().min(0),
    Dosa:Joi.number().min(0),
    Pongal:Joi.number().min(0),
    userId:Joi.string().required(),
})

const getLog = async (req,res) => {
    const result = await Logs.find();
    console.log(result)
    res.send(result)
}
const postLog = async(req,res) => {
    const data =  req.body.data ;
    const result = logValidation.validate(data);
    if(result.value) {
        console.log('valid result')
        const log = new Logs(data) ;
        const result = await log.save();  
        console.log(result)
    }
    res.send("ok")
}
module.exports ={
    getLog,
    postLog
}