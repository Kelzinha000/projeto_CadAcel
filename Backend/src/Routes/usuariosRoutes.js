import {Router} from "express"
import{criarUsuario, login, getAll} from '../Controllers/usuariosControllers.js'

const router = Router()

router.post('/cadastro', criarUsuario)
router.post('/login', login)
router.get('/', getAll )

export default router;