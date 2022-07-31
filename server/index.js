const express = require('express')
// const mongoose = require('mongoose')
const db = require('./models/db')
const app = express() 
const PORT = 4000;
const logRoutes = require('./routes/logRoutes')
const userRoutes = require('./routes/logRoutes')

app.use(express.json())

db.on('error',err => console.log(err)) ;

app.use('/logs',logRoutes)

// app.use('/users',userRoutes)

app.listen(PORT,() => console.log('listening in port' +PORT))