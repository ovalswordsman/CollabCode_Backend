const mongoose = require('mongoose');

require('dotenv').config()


const password = encodeURIComponent(process.env.MONGODB_PASS);

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(`mongodb+srv://kushagra19991998:${password}@cluster0.14xixzh.mongodb.net/`, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }

 module.exports = connectDB 