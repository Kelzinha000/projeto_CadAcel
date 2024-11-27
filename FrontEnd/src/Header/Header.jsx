import { HeaderNav, NavBar, NavLinksBox, IconsNav, IconPerfil, Divisao} from "../styled/Header.js"

import person from "../public/Group.svg"
import question from "../public/question.svg"
import house from "../public/House.svg"
import pencil from "../public/icon-Lapis.svg"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <HeaderNav>
                <NavBar>
                <IconPerfil src={person} alt="Icon de perfil"  />
                    <Divisao/>
                    <NavLinksBox>
                        <IconsNav src={house} alt="Icon de casa"/>
                        <Link className="linksNav" to="/HomeAdm">Home</Link>
                    </NavLinksBox>

                    <NavLinksBox>
                        <IconsNav src={question} alt="Icon de interrogação"/>
                        <Link className="linksNav" to="/">Sobre</Link>
                    </NavLinksBox>

                    <NavLinksBox>
                        <IconsNav src={pencil} alt="Icon de Lápis"/>
                        <Link className="linksNav" to="/CriarForm">Criar</Link>
                    </NavLinksBox>
                </NavBar>
            </HeaderNav>
        </>
    )
}

export default Header;