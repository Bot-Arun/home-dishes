const mongoose = require('mongoose')
const dotenv = require("dotenv");
dotenv.config();



const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.0muc3.mongodb.net/homeDishes?retryWrites=true&w=majority`;
console.log(uri)
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("homeDishes").collection("devices");
//   console.log(collection)
  
// });
mongoose.connect(uri).then(res => console.log("successfully connected to db")).catch(err => console.log(err))

const db = mongoose.connection

module.exports = db