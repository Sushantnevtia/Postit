const mongoose = require('mongoose');
const mongoURL = "mongodb+srv://sushantnevtia:RcNUpz9fmnJHs6XO@cluster1.tbfjxj7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"
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
