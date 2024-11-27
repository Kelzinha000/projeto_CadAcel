import Input from "../Components/Input/Input.jsx";
import Botao from "../Components/Botao/Botao.jsx";
import { LinkForm, TituloForm, BOxTitulo, Select, SectionCadastro, SelectFields, Label, ImgIcon, LinkCadastro, SubTituloForm, Option } from "../styled/Cadastro.js";
import IconEmail from "../public/Email-Icon.svg"
import Person from "../public/Group.svg"
import IconSenha from "../public/Senha.svg"
import Icondata from "../public/DataNasc.svg"
import Iconphone from "../public/Telephone.svg"
import IconAnexo from "../public/Anexo.svg"
import IconPrancheta from "../public/Prancheta.svg"
import { motion } from "framer-motion"


const Cadastro = ({ TipoInput, NomeInput, PlaceholderInput, nomeBotao, FormTitulo, NameLabel, IconImg, tipoDeUseState, FuncaoBotao }) => {
    return (
        <SectionCadastro>
            <motion.form className="form-design" initial={{ x: 100, opacity: 0 }} animate={{
                x: 1, x: 0,
                opacity: 1
            }} transition={{
                default: { type: "spring" },
                opacity: { ease: "linear" }, duration: 2
            }}  >
                <BOxTitulo>
                    <TituloForm>Cadastro</TituloForm>
                    <SubTituloForm>Seja bem-vindo!</SubTituloForm>
                </BOxTitulo>
                <Input TipoInput="text" NameLabel="nome" IconImg={Person} />
                <Input TipoInput="email" NameLabel="email" IconImg={IconEmail} />
                <Input TipoInput="password" NameLabel="senha" IconImg={IconSenha} />
                <Input TipoInput="data" NameLabel="data de nascimento" IconImg={Icondata} />
                <Input TipoInput="number" NameLabel="telefone" IconImg={Iconphone} />
                <SelectFields>
                    <Select name="" id="">
                        <Option value=""></Option>
                        <Option value="">Visual</Option>
                        <Option value="">Fisica</Option>
                        <Option value="">Auditiva</Option>
                        <Option value="">Neurodivergente</Option>
                    </Select>
                    <Label htmlFor=""><ImgIcon src={IconPrancheta} alt="" />  deficiência</Label>
                </SelectFields>
                <Input TipoInput="text" NameLabel="comprovante de deficiência" IconImg={IconAnexo} />
                <LinkForm>Já possui uma conta? <LinkCadastro tabIndex={3} href="/">Login</LinkCadastro></LinkForm>
                <Botao nomeBotao="Cadastrar" />
            </motion.form>

        </SectionCadastro>
    )

}


export default Cadastro;