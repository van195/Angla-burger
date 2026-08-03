import express from 'express'
import user from './routes/user.js'
import Category from './routes/CatetagoryRoute.js'
import product from './routes/productRoute.js'
import address from './routes/addressRoute.js'
import order from './routes/orderRoute.js'
import payment from './routes/paymentRoute.js'
import cors from 'cors'
import helmet from 'helmet'
import { clerkMiddleware } from "@clerk/express";
const app = express();
    app.use(express.json());
    app.use(helmet());
    app.use(cors({
    origin: [
        "http://localhost:5173",
        "http://localhost:5174"
    ],
    credentials: true
    }));
    app.use(clerkMiddleware());
    app.use('/api/users',user);
    app.use('/api/category',Category);
    app.use('/api/product',product);
    app.use('/api/address',address);
    app.use('/api/order',order);
    app.use('/api/payment',payment);
    app.get('/',()=>{
        console.log('hello');
    })
    app.use((err, req, res, next) => {
    console.error("🔥 Express Error:");
    console.error(err);

    res.status(err.status || 500).json({
        message: err.message,
    });
});
export default app;
 
