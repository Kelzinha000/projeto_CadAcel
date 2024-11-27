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


export const SobreSection = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
background-image: linear-gradient(to right,${Cores.AzulClaro}, ${Cores.Ciano}); 
margin-top: 100px;
padding-bottom: 150px;
`

export const BoxCards = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 70px;
`

export const TituloSection = styled.h1`
font-family: Arial, Helvetica, sans-serif;
color: ${Cores.AzulEscuro};
text-align: center;
font-size: 40px;
padding: 100px;
`
