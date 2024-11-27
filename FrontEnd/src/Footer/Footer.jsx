import {BackgroundFooter, IconsSocialMedia,Logo,ContainerLinks,ConteudoFooter, TodosDireitos} from "../styled/Footer.js"

import GitHubIcon from "../public/GitHub.svg"
import TelephoneIcon from "../public/Telephone.svg"
import EmailIcon from "../public/Email-Icon.svg"

import LogoWhite from "../public/LogoWhite.png"

const Footer =  ()=>{

    return(
        <BackgroundFooter>
            <ConteudoFooter>
            <Logo src={LogoWhite} alt="Logo versão branca" />
            <ContainerLinks>
                <img src={GitHubIcon} alt="Icone do GitHub" />
                <img src={TelephoneIcon} alt="Icone de telefone" />
                <img src={EmailIcon} alt="Icone de Email" />
            </ContainerLinks>
            </ConteudoFooter>
            <TodosDireitos>©Todos os direitos reservados</TodosDireitos>
        </BackgroundFooter>
    )
}

export default Footer;