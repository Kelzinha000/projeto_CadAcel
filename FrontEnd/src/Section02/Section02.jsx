import { SectionSobre, SobreContainer,Img, TituloContainer,Conteudo } from "../styled/Section02.js";
import ImgSection2 from "../public/Img-DeficienteVisual.png"


const Section2 = ()=>{
    return(
<SectionSobre>
<SobreContainer className="animation-scroll" tabIndex={5} >
    <TituloContainer>Sobre</TituloContainer>
    <Conteudo>Hoje temos os dados separados, por secretaria como da Saúde e Educação e sem um censo único temos registros das pessoas com deficiência que residem em Jaraguá do Sul superficialmente não abrangendo por região, necessidade, desta forma o mapeamento se mostra eficaz. Mesmo o IBGE não tem esse levantamento no município. Pensando em soluções para resolução desta necessidade as associações poderão fornecer os dados, a parceria com a administração pública poderá nos fornecer dados e fazer os cadastros e ajudar na legitimação de todas as pessoas que possuem alguma necessidade especial, junto ao COMPED poderemos unir todas as entidades, famílias e comunidade para atualizar os dados</Conteudo>
</SobreContainer>
<Img src={ImgSection2} alt="Ilustração de um garote ajudando um idoso deficiênte visual a atravessar no semáforo " className="animation-scroll" />
</SectionSobre>
    )
}

export default Section2;