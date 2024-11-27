import dotenv from "dotenv"
dotenv.config()

// database -> db
// banco de dados -> bd
let db = {
    bd: process.env.BD_DB, 
    user: process.env.BD_USER, 
    password: process.env.BD_PASSWORD
}

if( process.env.NODE_ENV === 'test'){
    db={
        bd: process.env.BD_TEST_DB, 
        user: process.env.BD_TEST_USER, 
        password: process.env.BD_TEST_PASSWORD
    }
}

export default db;