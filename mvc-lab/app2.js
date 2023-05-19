import express from 'express';
import bodyParser from 'body-parser';

const server = express();

server.use(bodyParser());

server.post('/login', function(req, res) {
    // Extract the username and pasword
    const username = req.body.username;
    const password = req.body.password;
    
    // Check the username and password against hardcoded values
    if (username === 'guest' && password === '1234') {
        res.send('Welcome');
    } else {
        res.end('Wrong username or password');
    }
});

server.listen(8080);