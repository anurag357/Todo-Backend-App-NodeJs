require("dotenv").config();
const express = require("express");
const app = express();
const connectToDB = require("./config/db");
const {route} = require('./routes/todoRoute')
connectToDB();
//middleware
app.use(express.json());
//Routes 
app.use('/', route)
const PORT = process.env.PORT || 4000 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})