const mongoose = require("mongoose");
require("dotenv").config();

const db = process.env.MONGO_URI;
const connectDB = async () => {
    try {
        await mongoose.connect(db,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 0, // Disable connection timeout
            socketTimeoutMS: 0,
        });
        console.log("MongoDB connected...");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

connectDB();
module.exports = mongoose.connection;