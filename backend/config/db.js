const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Successfully Connected: ${connect.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error + error.message);

    // exit process on failure
    process.exit(1);
  }

}

module.exports = connectDB;