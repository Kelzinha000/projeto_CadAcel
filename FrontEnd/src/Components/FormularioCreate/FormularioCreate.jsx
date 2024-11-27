
import Input from "../Input/Input.jsx";
import { Form, LinkForm, TituloForm, BOxTitulo, Select, SelectFields, Label, SubTituloForm, Option } from "../../styled/Formulario.js";
import Botao from "../Botao/Botao.jsx";
import TituloIcon from "../../public/TituloIcon.svg"
import LocalIcon from "../../public/Icon-localizacao.svg"
import DescricaoIcon from "../../public/descricao.svg"
import { ImgIcon } from "../../styled/Input.js";
import { motion } from "framer-motion"

const FormularioCreate = ({ TipoInput, NomeInput, PlaceholderInput, nomeBotao, FormTitulo, NameLabel, IconImg, tipoDeUseState, FuncaoBotao }) => {

    return (
        <>
            <motion.form className="form-styled-login" initial={{ x: 100, opacity: 0 }} animate={{
                x: 1, x: 0,
                opacity: 1
            }} transition={{
                default: { type: "spring" },
                opacity: { ease: "linear" }, duration: 2
            }} >
                <BOxTitulo>
                    <TituloForm>Formulário</TituloForm>
                    <SubTituloForm>Faça sua sugestão de melhoria</SubTituloForm>
                </BOxTitulo>
                <Input TipoInput="text"
                    NameLabel="Título" IconImg={TituloIcon} />
                <SelectFields>
                    <Select name="" id="">
                        <Option value=""></Option>
                        <Option value="">Cidade 01</Option>
                        <Option value="">Cidade 02</Option>
                    </Select>
                    <Label> <ImgIcon src={LocalIcon} alt="" />localição</Label>
                </SelectFields>
                <Input TipoInput="text"
                    NameLabel="descricao" IconImg={DescricaoIcon} />
                <Botao nomeBotao="Enviar" />
            </motion.form>
        </>
    )
}

export default FormularioCreate;