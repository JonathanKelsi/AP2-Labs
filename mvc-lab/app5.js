import express from "express";
import bodyParser from "body-parser";
import routerArticles from './routes/articles2.js';
import routerLogin from './routes/login2.js';
import session from 'express-session';

const server = express();

server.use(express.static("public"));

server.use(session({
    secret: 'foo',
    saveUninitialized: false,
    resave: false
}));

server.use(bodyParser());
server.set("view engine", "ejs");

server.use("/articles", routerArticles);
server.use("/login", routerLogin);

server.listen(8080);
