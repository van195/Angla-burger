import express from 'express';
import { CreateAccount } from '../controller/userController.js';
import { requireAuth } from "@clerk/express";

const router = express.Router();
router.post('/register-user',requireAuth(),CreateAccount)

export default router;