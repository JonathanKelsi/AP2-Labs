const articles = [
    { id: 1, title: "title1", content: "content1" },
    { id: 2, title: "title2", content: "content2" },
    { id: 3, title: "title3", content: "content3" },
];

function getArticles() {
    return articles;
}

function getArticle(id) {
    for (const i in articles) {
        const article = articles[i];
        if (article.id == id) return article;
    }

    return null;
}

function createArticle(title, content) {
    const article = articles[articles.length - 1];
    let newArticle = { id: article.id + 1, title, content };
    articles.push(newArticle);
}

export default {
    getArticles,
    getArticle,
    createArticle,
}