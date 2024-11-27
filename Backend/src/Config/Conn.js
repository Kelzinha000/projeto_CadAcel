import {Sequelize} from "sequelize"
import dotenv from "dotenv"
import db from "./database.js"
dotenv.config()


    const conn = new Sequelize(
        db.bd, 
        db.user, 
        db.password,
        {
        host: "localhost", 
        dialect: "mysql"
        }
    )

export default conn; 