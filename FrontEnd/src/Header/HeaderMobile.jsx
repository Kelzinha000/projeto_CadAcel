import { NavHeader, NavBar } from "../styled/HeaderMobie";
import { IconPerfil, IconsNav } from "../styled/Header.js";
import person from "../public/Group.svg"
import question from "../public/question.svg"
import house from "../public/House.svg"
import pencil from "../public/icon-Lapis.svg"

const HeaderMobile = () => {
    return(
        <>
       <NavHeader>
       <IconPerfil src={person} alt="Icon de perfil"  />
        <NavBar>
        <IconsNav src={house} alt="Icon de home"  />
        <IconsNav src={question} alt="Icon de interrogação"  />
        <IconsNav src={pencil} alt="Icon de lápis"  />
        </NavBar>
       </NavHeader>
        </>
    )
}


export default HeaderMobile;