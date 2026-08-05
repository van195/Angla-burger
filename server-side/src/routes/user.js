import express from 'express';
import { CreateAccount, dashboardStats, getAllUsers, getSingleUsers } from '../controller/userController.js';
import { requireAuth } from "@clerk/express";

const router = express.Router();
router
   .post('/register-user',requireAuth(),CreateAccount)
   .get('/get-all-Users',getAllUsers)
   .get('/get-single-Users/:id',getSingleUsers)
   .get("/dashboard-stats", dashboardStats);

export default router;