import 'dotenv/config';   
import app from './app.js'
import sequelize from './config/db.js';

const startServer = async()=>{
    const PORT = process.env.PORT || 8080;

    try {
        await sequelize.authenticate();
        console.log('database connected');
        sequelize.sync({ alter: true })
        .then(()=>{console.log("database on")})
        .catch((err)=>{console.error("database off", err)})
        app.listen(PORT, "0.0.0.0", () => {
         console.log(`Server listening on port ${PORT}`);
        });
    } catch (error) {
        console.error(error);
    }
}
startServer(); 
