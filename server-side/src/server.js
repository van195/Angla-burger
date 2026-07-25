import 'dotenv/config';   
import app from './app.js'
import sequelize from './config/db.js';

const startServer = async()=>{
    try {
        await sequelize.authenticate();
        console.log('database connected');
        sequelize.sync({ alter: true })
        .then(()=>{console.log("database on")})
        .catch((err)=>{console.error("database off", err)})
        app.listen(8080,()=>{
          console.log('server listening');
        })
    } catch (error) {
        console.error(error);
    }
}
startServer(); 
