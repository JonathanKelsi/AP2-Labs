import express from "express";
import bodyParser from "body-parser";
import routerArticles from './routes/articles2.js';
import routerLogin from './routes/login2.js';
import session from 'express-session';

const Mongoose = require("mongoose");
const app = require("express");

app.use(express.static("public"));

app.use(session({
    secret: 'foo',
    saveUninitialized: false,
    resave: false
}));

app.use(bodyParser());
app.set("view engine", "ejs");

app.use("/articles", routerArticles);
app.use("/login", routerLogin);

app.listen(8080);
