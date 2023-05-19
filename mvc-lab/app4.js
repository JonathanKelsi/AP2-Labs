import express from "express";
import bodyParser from "body-parser";
import routerArticles from './routes/articles.js';
import routerLogin from './routes/login.js';

const server = express();

server.use(express.static("public"));

server.use(bodyParser());
server.set("view engine", "ejs");

server.use("/articles", routerArticles);
server.use("/login", routerLogin);

server.listen(8080);
