import express from 'express';
import { CreateAccount, createAdminUser, dashboardStats, getAllUsers, getSingleUsers } from '../controller/userController.js';
import { requireAuth } from "@clerk/express";

const router = express.Router();
router
   .post('/register-user',requireAuth(),CreateAccount)
   .post('/createAdmin-user',createAdminUser)
   .get('/get-all-Users',getAllUsers)
   .get('/get-single-Users/:id',getSingleUsers)
   .get("/dashboard-stats", dashboardStats);

export default router;