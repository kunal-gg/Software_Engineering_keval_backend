const express = require("express");
const app = express();;
const bodyParser = require('body-parser')



const authRoute = require('./auth')

app.use(express.json());


app.use('/api/user', authRoute)


app.listen(3000, () => {
  console.log("Server running");
});

