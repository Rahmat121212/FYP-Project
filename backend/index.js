const express = require("express");
const connect = require("./config/Database_Connection");
require('dotenv').config()
const app = express();
connect()
const PORT = process.env.PORT || 8000
app.listen(PORT , ()=>{
     console.log(`Your Server is On PORT : ${PORT}`);
})