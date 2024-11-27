import Usuario from '../Models/usuariosModels.js'
import conn from "../Config/Conn.js"
import { z } from 'zod'
import formatZodError from '../Helpers/zodError.js'
import bcrypt from 'bcrypt'
import createUserToken from '../Helpers/create-user-token.js'


const createShema = z.object({
    nome: z.string().min(3, { message: "O usuário deve ter pelo menos 3 caracteres" }),
    email: z.string().email({ message: "Email inválido" }),
    senha: z.string().min(6, { message: "A senha deve ter pelo menos 6 caracteres" }), 
})

const loginSchema = z.object({
    email: z.string().email({message: "Email inválido"}), 
    senha: z.string().min(6, {message: "A senha deve conter pelo menos 6 caracteres"})
})

export const criarUsuario = async (request, response) => {
    const bodyValidation = createShema.safeParse(request.body)
    if (!bodyValidation.success) {
        response.status(400).json({ error: formatZodError(bodyValidation.error) });
        return
    }

    const { nome, email, senha, telefone, deficiencia, dataNascimento } = request.body
    const papel = request.body.papel || "user";
    const salt = bcrypt.genSaltSync(12);
    const senhaCrypt = bcrypt.hashSync(senha, salt);

    const  novoUsuario = {
        nome,
        email,
        senha: senhaCrypt,
        telefone,
        deficiencia, 
        dataNascimento,
        papel,
    };

    try {
        const verificaEmail = await Usuario.findOne({ where: { email } });
        if (verificaEmail) {
            return response.status(401).json({ err: "Email está em uso!" })
        }
        await Usuario.create(novoUsuario);
        const selecionaNovoUsuario = await Usuario.findOne({
            where: { email },
            raw: true
        })
        await createUserToken(selecionaNovoUsuario, request, response)
    } catch (error) {
        console.error(error)
        response.status(500).json({ message: "Erro ao cadastrar Usuario" });
    }
}

export const login = async( request, response)=>{
    const loginValidation = loginSchema.safeParse(request.body);
    if(!loginValidation.success){
        return response.status(400).json({detalhes: formatZodError(loginValidation.error)});
    }

    const {email, senha} = loginValidation.data; 

    try {
        const usuario = await Usuario.findOne({where:{email}})
        if(!usuario){
        return response.status(404).json({err:"Usuário não encontrado"})
        }
        const comparaSenha = await bcrypt.compare(senha, usuario.senha);
        if(!comparaSenha){
            response.status(401).json({err:"Senha incorreta"})
            return
        }
        await createUserToken(usuario, request, response)
        response.status(200).json(usuario)
    } catch (error) {
        console.log(error)
        response.status(500).json(console.error())
    }
}

export const getAll = async( request, response) => {
    const page = parseInt(request.query.page) || 1

    const limit = parseInt(request.query.limit) || 6

    const offset = (page - 1) * limit
    try {

        const usuarios = await Usuario.findAndCountAll({
            limit,
            offset
        })

        const totalPaginas = Math.ceil(usuarios.count / limit)


        response.status(200).json({
            totalUsuarios: usuarios.count,
            totalPaginas: totalPaginas,
            paginaAtual: page,
            itemsPorPages: limit,
            proximaPag: totalPaginas === 0 ? null : `http://localhost:3333/usuarios?page=${page + 1}`,
            Usuarios: usuarios.rows
        })


    } catch (err) {
        console.error(err)
        response.status(500).json({ message: "Erro ao listar usuários" })
    }
}
