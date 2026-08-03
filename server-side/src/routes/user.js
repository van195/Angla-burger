import express from 'express';
import { CreateAccount, getAllUsers, getSingleUsers } from '../controller/userController.js';
import { requireAuth } from "@clerk/express";

const router = express.Router();
router
   .post('/register-user',requireAuth(),CreateAccount)
   .get('/get-all-Users',getAllUsers)
   .get('/get-single-Users/:id',getSingleUsers)

export default router;