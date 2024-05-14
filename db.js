const mongoose = require('mongoose');
const mongoURL = "mongodb+srv://sushantnevtia:rAj7xrfBAQgKN2mz@cluster-1.4q6cs94.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-1"
const mongodb = async () =>{
    try{
        await mongoose.connect(mongoURL);
        console.log("connected to mongodb");
    }
    catch(err){
        // console.log(err);
        console.log("error in connecting to mongodb");
    }
}

module.exports = mongodb;
