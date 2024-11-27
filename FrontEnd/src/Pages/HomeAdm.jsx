import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import SectionRelacoes from "../SectionRelacoes/SectionRelacoes.jsx";
import logoCadAcel from "../public/Logo.png"
import { Logo } from "../styled/Section01.js";

const HomeAdm = ()=>{
    return(
        <>
        <Header/>
        <Logo src={logoCadAcel} alt="Logo do Projeto"/>
        <SectionRelacoes/>
        <Footer/>
        </>
    )
}

export default HomeAdm;