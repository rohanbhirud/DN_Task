const mongoose = require("mongoose");

const connectDB = async ()=>{
    try{
        mongoose.set("strictQuery",false);
        const conn = await mongoose.connect(process.env.MONGODB_CONN);
        console.log("Connected to DB : " + conn.connection.host)
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;