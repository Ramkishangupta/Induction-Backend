const mongoose = require("mongoose");

const connectDatabase = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 50,
})
}

module.exports = connectDatabase;