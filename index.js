const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.post('/login', (req, res) => {
    res.statusCode(200).send('Login Successful');
})

app.listen(3000, () => {
    console.log('Listening on port https://localhost:3000');
    }
);

