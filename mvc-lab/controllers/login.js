import loginModel from "../models/login.js ";

function login(req, res) {
    const result = loginModel.checkUsernameAndPassword(req.body.username, req.body.password);
    if (result) {
        res.end('welcome')
    } else {
        res.end('wrong username or password')
    }
}

export {
    login
}