import express from 'express';
const server = express();

server.get('/login', function(req, res) {
    // Extract the username and pasword
    const username = req.query.username;
    const password = req.query.password;
    
    // Check the username and password against hardcoded values
    if (username === 'guest' && password === '1234') {
        res.send('Welcome');
    } else {
        res.end('Wrong username or password');
    }
});

server.listen(8080);