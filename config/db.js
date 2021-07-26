const mongoose = require('mongoose');

const db = async () => {
    try {
       const conn = await mongoose.connect(process.env.MONGO_URI,{
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology:true
        })
        console.log("server is running");
        
    } catch (err) {
        console.log(err);
        process.exit(1);
        
    }
}



module.exports = db;


