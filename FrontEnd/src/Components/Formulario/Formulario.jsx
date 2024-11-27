import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Input from "../Input/Input.jsx";
import { Form, LinkForm, TituloForm ,LinkCadastro, Error} from "../../styled/Formulario.js";
import Botao from "../Botao/Botao.jsx";
import emailIcon from "../../public/Email.svg"
import senhaIcon from "../../public/Senha.svg"
import { motion } from "framer-motion"
import { AiFillExclamationCircle } from "react-icons/ai";


const Formulario = ({ TipoInput, NomeInput, PlaceholderInput, nomeBotao, FormTitulo, NameLabel, IconImg, tipoDeUseState, FuncaoBotao, Index, IndexBotao }) => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const [user, setUser] = useState(null);

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post(
                "http://localhost:3333/usuarios/login",
                JSON.stringify({ email, senha }),
                {
                    headers: { "Content-Type": "application/json" },
                },
            );
            setUser(response.data)
            return console.log(response.data)
        } catch (error) {
            if (!error?.response) {
                setError("Erro ao acessar o site");
            } else if (error.response.status === 401) {
                setError(" Usuário ou senha inválidos",);
            }
        }
    }



    return (
        <div className="ConteinerForm">
            {user === null ? (
                <motion.form className="form-styled-login" initial={{ x: 100 }} initial={{ x: 100, opacity: 0 }} animate={{
                    x: 1, x: 0,
                    opacity: 1
                }} transition={{
                    default: { type: "spring" },
                    opacity: { ease: "linear" }, duration: 2
                }}>
                    <TituloForm>{FormTitulo}</TituloForm>
                    <Input NameLabel="Email"
                        Index={1}
                        TipoInput="email"
                        NomeInput="email"
                        IconImg={emailIcon}
                        tipoDeUseState={setEmail}
                    />
                    <Input NameLabel="Senha"
                        Index={2}
                        TipoInput="senha"
                        NomeInput="senha"
                        IconImg={senhaIcon}
                        tipoDeUseState={setSenha}
                    />
                    <Error>{error && <AiFillExclamationCircle></AiFillExclamationCircle>}{error}</Error>
                    <LinkForm>Não possui uma conta? <LinkCadastro tabIndex={3} href="/Cadastro">Cadastre-se</LinkCadastro></LinkForm>
                    <Botao IndexBotao={4} FuncaoBotao={handleLogin} nomeBotao="Entrar" />
                </motion.form>
            ) : (
                <div />
            )}
        </div>
    )
}

export default Formulario;