import {validationResult,body} from 'express-validator';
import rateLimit from 'express-rate-limit' 
const userValidationRule = [
   body('name').trim().escape().notEmpty(),
   body('phone').isLength({ min: 10 }),
]

export const orderLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  message: 'Too many requests from this IP, please try again after 15 minutes'
});