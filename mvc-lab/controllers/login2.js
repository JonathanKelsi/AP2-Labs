import loginModel from "../models/login2.js";

function login(req, res) {
    const result = loginModel.checkUsernameAndPassword(req.body.username, req.body.password);
    if (result) {
        req.session.username = req.body.username;
        res.end('welcome')
    } else {
        res.end('wrong username or password')
    }
}

function isLoggedIn(req, res, next) {
    if (req.session.username != null) {
        return next();
    } else {
        res.redirect('/');
    }
}

export {
    login,
    isLoggedIn
}