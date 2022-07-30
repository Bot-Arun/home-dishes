const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/homeDishes')
    .then(res => console.log(res))
    .catch(err => console.log(err))

const db = mongoose.connection

module.exports = db