import express from "express";
import bodyParser from "body-parser";
import router from './routes/articles.js';

const server = express();

server.use(bodyParser());
server.set("view engine", "ejs");

server.use("/", router);

server.listen(8080);
