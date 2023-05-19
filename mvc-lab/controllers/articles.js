import articleModel from "../models/articles.js ";

function getArticles(req, res) {
    const articles = articleModel.getArticles();
    res.render("../views/allArticles", { articles: articles });
}

function getArticle(req, res) {
    const article = articleModel.getArticle(req.params.id);
    res.render("../views/article", { article: article });
}

function createArticle(req, res) {
    const articles = articleModel.createArticle(req.body.title, req.body.content);
}

export {
    getArticles,
    getArticle
}