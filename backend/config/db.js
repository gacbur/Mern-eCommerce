require('dotenv').config();

const mongoose = require('mongoose')

const MONGO_URI = `${process.env.MONGO_URI}`

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connection SUCCESS")
    } catch (error) {
        console.log(MONGO_URI)
        console.error("MongoDB connection FAIL", error)
        process.exit(1)
    }
}

module.exports = connectDB
