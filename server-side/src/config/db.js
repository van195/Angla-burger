import {Sequelize} from 'sequelize'
import 'dotenv/config';
const databaseUrl = process.env.DATABASE_URL;
if(!databaseUrl) {
     console.log('no databaseUrl');
}
const sequelize = new Sequelize(
    databaseUrl,
    {
        dialect: "postgres",
        logging: false,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },

      
    }
);
export default sequelize;