import express from 'express'
import user from './routes/user.js'
import Category from './routes/CatetagoryRoute.js'
import product from './routes/productRoute.js'
import cors from 'cors'
import { clerkMiddleware } from "@clerk/express";
const app = express();
    app.use(express.json());
    app.use(cors());
    app.use(clerkMiddleware());
    app.use('/api/users',user);
    app.use('/api/category',Category);
    app.use('/api/product',product);
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
 
