import Card from "../Components/Card/Card.jsx";
import Iconbrain from "../public/brain.svg"
import IconOlho from "../public/Olho.svg"
import IconCadeirante from "../public/Cadeirante.svg"
import IconAuditivo from "../public/Auditivo.svg"

import { SobreSection, TituloSection, BoxCards } from "../styled/SectionSobre.js";


const SectionSobre = ({ tituloCard , iconCard, conteudo}) => {
    return (
        <SobreSection>
            <TituloSection className="animation-scroll">Saiba mais</TituloSection>
            <BoxCards className="animation-scroll">
                <Card tituloCard="Neurodivergente" iconCard={Iconbrain} conteudo="Neurodivergente é um termo que se refere a pessoas que têm um funcionamento cerebral diferente do padrão considerado normal, ou seja, neurotípico. "/>
                <Card tituloCard="Deficiente visual" iconCard={IconOlho} conteudo="A deficiência visual é a perda ou redução da capacidade visual em ambos os olhos em caráter definitivo, que não pode ser melhorada ou corrigida com o uso de lentes, tratamento clínico ou cirúrgico."/>
                <Card tituloCard="Deficiente físico" iconCard={IconCadeirante} conteudo="Deficiência física é uma alteração parcial ou total em uma ou mais partes do corpo que dificulta ou impede a mobilidade de uma pessoa. A deficiência pode ser congênita, ou seja, estar presente desde o nascimento ou adquirida ao longo da vida."/>
                <Card tituloCard="Deficiente auditivo" iconCard={IconAuditivo} conteudo="Deficiente auditivo é uma pessoa que tem alguma dificuldade para ouvir sons, seja por uma perda parcial ou total da audição. A deficiência auditiva pode ser causada por genética, lesões, infecções, envelhecimento ou exposição prolongada a ruídos altos." />
            </BoxCards>
        </SobreSection>
    )
}


export default SectionSobre;