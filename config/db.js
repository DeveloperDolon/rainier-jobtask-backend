const mongoose = require("mongoose");
require('dotenv').config();

const mongodb = async () => {
  try {
    console.log("Collecting to db.")
    await mongoose.connect(
      `${process.env.DATABASE_LOCAL}`, {dbName: "couseManagementDB"}
    );
    console.log("database connected..");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = mongodb;