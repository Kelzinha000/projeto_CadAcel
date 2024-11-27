import "dotenv/config";
import express, { request, response } from "express";
import cors from "cors";

//Conexão com o Banco de Dados
import conn from "./Config/Conn.js";

// Models
import usuarioModel from "./Models/usuariosModels.js";

//Rotas
import usuarioRouter from './Routes/usuariosRoutes.js'


const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// rotas
app.use('/usuarios', usuarioRouter)

app.use((request, response) => {
  response.status(404).json({ message: "Rota não encontrada" });
});

conn.sync(/*{force:true}*/).then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor on http://localhost:${PORT}`);
  }); 
});