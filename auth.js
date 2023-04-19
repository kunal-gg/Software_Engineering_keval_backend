const router = require("express").Router();
const data = require('./db.json')
const fs = require('fs')

// registration
router.post("/register", async (req, res) => {

  const username = req.body.username
  const email = req.body.email

  console.log("this is the req", JSON.stringify(req.body))
  for(let i = 0; i < data.length; i++){
    if(data[i].username === username){
      return res.status(400).json({error: "Username already exists"})
    }
    if(data[i].email == email){
      return res.status(400).json({error: "Email already exists"})
    }
  }

  // write in the following db
  const user = {
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  }
  data.push(user)

  console.log(" this is the new user" ,  user)

  fs.writeFile('./db.json', JSON.stringify(data), (err) => {
    if(err) throw err
    console.log('Data written to file')
    res.json(user)
  })
}
)
  //   hashing password



module.exports = router;