import express from 'express';
import { registerAddress } from '../controller/addressController.js';
import { requireAuth } from '@clerk/express';

const router = express.Router();
router
   .post('/create-address', requireAuth(),registerAddress)
   //.get('/',getAllCategory)

export default router;