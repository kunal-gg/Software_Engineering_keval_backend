const express = require('express');
const User = require('./UserMode');
const app = express();

app.use(express.json());
app.use(bodyParser());

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.post('/login', (req, res) => {
    res.send("Login Successful");
})

app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const name = req.body.name
    const user = new User({
        username: username,
        password: password,
        email: email
        
    })

    user.save()
    console.log(user)
})

app.listen(3000, () => {
    console.log('Listening on port https://localhost:3000');
    }
);

