import express from 'express';
import { getArticles, getArticle } from '../controllers/articles.js';

const router = express.Router();

router.get('/', getArticles);
router.get('/:id', getArticle);

export default router;