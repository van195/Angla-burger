import app from './app.js'
import sequelize from './config/db.js';

const startServer = async()=>{
    try {
        await sequelize.authenticate();
        console.log('database connected');
        app.listen(8080,()=>{
          console.log('server listening');
        })
    } catch (error) {
        console.error(error);
    }
}
startServer(); 
