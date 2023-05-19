import express from 'express';
import { getArticles, getArticle } from '../controllers/articles2.js';
import { isLoggedIn } from '../controllers/login2.js';

const router = express.Router();

router.get('/', isLoggedIn, getArticles);
router.get('/:id', isLoggedIn, getArticle);

export default router;