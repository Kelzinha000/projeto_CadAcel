import { request, response}  from 'express'
import jwt from 'jsonwebtoken'

const createUserToken = async(usuario, request, response) =>{
   
    const token = jwt.sign({
        nome: usuario.nome, 
        id: usuario.id
    }, 
    process.env.TOKEN_PASSWORD, 
    {
        expiresIn: "12", 
    })
    response.status(200).json({
        message:"Você está autenticaado", 
        token: token, 
        usuarioId: usuario.id, 
    }); 
}

export default createUserToken; 