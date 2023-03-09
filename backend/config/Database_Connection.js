const mongoose = require("mongoose");
require('dotenv').config()
const connect = async () =>{
     try {
          const response = await mongoose.connection(process.env.URL);
          console.log("Your Database is Connected !");
     } catch (error) {
          console.log(error.message);
     }
}
module.exports = connect ;