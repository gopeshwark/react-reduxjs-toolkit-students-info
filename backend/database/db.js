const mongoose = require("mongoose");
const db = "mongodb://localhost/student_toolkit";

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });

    console.log("mongodb is successfully connected...");
  } catch (error) {
    console.log(`error ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
