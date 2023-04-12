const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.post('/login', (req, res) => {
    res.send("Login Successful");
})

app.post('/register', (req, res) => {
    res.send("this is working")
})

app.listen(3000, () => {
    console.log('Listening on port https://localhost:3000');
    }
);

