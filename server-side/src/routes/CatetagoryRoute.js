import express from 'express';
import { createCategory, getAllCategory } from '../controller/categoryController.js';

const router = express.Router();
router
   .post('/create-category',createCategory)
   .get('/list-category',getAllCategory)

export default router;