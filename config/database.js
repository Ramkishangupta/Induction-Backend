const mongoose = require("mongoose");

const connectDatabase = ()=>{
    mongoose.connect(process.env.mongodbURL,{useNewUrlParser: true,useUnifiedTopology: true, maxPoolSize: 50}).then((data)=>{
        console.log(`Mongodb connected with server`);
    })
}

module.exports = connectDatabase;