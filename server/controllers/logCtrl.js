// import mongoose from "mongoose"
// import logCtrl from '../models/logSma'
const mongoose = require('mongoose') 
const logSma = require('../models/logSma')
const Joi = require('joi') 

const logValidation = Joi.object({
    Idley:Joi.number().min(0),
    Dosa:Joi.number().min(0),
    Pongal:Joi.number().min(0),
    userId:Joi.string().required(),
})
const getLog = (req,res) => {
    
}
const postLog = (req,res) => {
    const data =  req.body.data ;
    const result = logValidation.validate(data);
    console.log(result)
    res.send("ok")
}
module.exports ={
    getLog,
    postLog
}