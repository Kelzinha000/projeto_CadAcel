import Header from "../Header/Header.jsx";
import HeaderMobile from "../Header/HeaderMobile.jsx"
import { SectionCriarForm } from "../styled/CriarForm.js";
import Formulario from "../Components/Formulario/Formulario.jsx"
import FormularioCreate from "../Components/FormularioCreate/FormularioCreate.jsx";

const CriarForm = ({ FormTitulo }) => {
    return (
        <>
            <Header/>
            <HeaderMobile/>
            <SectionCriarForm>
                <FormularioCreate/>
            </SectionCriarForm>
        </>
    )
}

export default CriarForm;