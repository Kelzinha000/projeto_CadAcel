import styled from "styled-components"


export const Cores = {
    Ciano: "#84bfc3",
    AzulClaro: "#6e8db9",
    AzulMedio: "#445b86",
    AzulEscuro: "#132c6c",
    Branco: "#ffffff",
    Preto: "#262626",
    cinza: "dddddd",
    sombra:"rgba(0, 0, 0, 0.25)"
}

export const SectionRElacoes = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
flex-wrap: wrap;
gap: 30px;
align-items: center;
padding: 100px;
@media screen and (max-width:680px){
padding: 0;
padding-top: 100px;
   } 
`
export const ContainerCards = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 30px;
align-items: center;
`

export const TituloSection = styled.h1`
color: ${Cores.AzulEscuro};
font-family: Arial, Helvetica, sans-serif;
text-align: center;
font-size: 38px;
`