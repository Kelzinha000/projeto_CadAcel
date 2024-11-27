import { Button } from "../../styled/Botao.js";

const Botao = ({nomeBotao, FuncaoBotao, IndexBotao}) => {
    return(
        <>
        <Button tabIndex={IndexBotao} onClick={(event) => FuncaoBotao(event)}>{nomeBotao}</Button>
        </>
    )
}

export default Botao;