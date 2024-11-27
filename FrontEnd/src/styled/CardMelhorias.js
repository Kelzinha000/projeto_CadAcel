import styled from "styled-components"


export const Cores = {
    Ciano: "#84bfc3",
    AzulClaro: "#6e8db9",
    AzulMedio: "#445b86",
    AzulEscuro: "#132c6c",
    Branco: "#ffffff",
    Preto: "#262626",
    cinza: "dddddd",
    sombra: "rgba(0, 0, 0, 0.25)"
}

export const ContainerCardMelhoria = styled.div`
display: flex;
justify-content: center;
background-color: ${Cores.Branco};
width: 600px;
height: 400px;
border-radius: 20px;
box-shadow: 0 4px 4px ${Cores.sombra};
@media screen and (max-width:780px){
    width: 300px;
    height: 550px;
   }
`



export const ConteudoCard = styled.div`
padding: 30px;
display: flex;
gap: 20px;
flex-direction: column;
justify-content: flex-start;
align-items:start;
`

export const ContainerInfoUsuario = styled.div`
display: flex;
gap:20px;
align-items: center;
`

export const InfoUsuario = styled.div`
display: flex;
gap: 30px;
`

export const InfoPostagem = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
gap: 10px;
`

export const NameUsuario = styled.h2`
font-family: Arial, Helvetica, sans-serif;
color: ${Cores.AzulEscuro};
font-size: 20px;
`

export const TipoDeficiencia = styled.h4`
font-family: Arial, Helvetica, sans-serif;
color: ${Cores.AzulEscuro};
border: solid 1.5px ${Cores.AzulEscuro};
border-radius: 20px;
text-align: center;
padding: 5px 30px; 
font-size: 15px;
font-weight: 600;
`


export const Local = styled.h4`
font-family: Arial, Helvetica, sans-serif;
color: ${Cores.AzulEscuro};
border: solid 1.5px ${Cores.AzulEscuro};
border-radius: 20px;
text-align: center;
padding: 5px 30px;
font-size: 15px;
font-weight: 600;
`

export const TituloPostagem = styled.h2`
font-family: Arial, Helvetica, sans-serif;
color: ${Cores.AzulEscuro};
`
export const DataPostagem = styled.h5`
font-family: Arial, Helvetica, sans-serif;
color: ${Cores.AzulEscuro};
`

export const DescricaoPostagem = styled.p`
font-family: Arial, Helvetica, sans-serif;
color: ${Cores.AzulEscuro};
padding-top: 20px;
text-align: justify;
`

export const IconPerfil = styled.img`
width: 33px;
height: 33px;
background-color: ${Cores.Ciano};
border-radius: 50%;
padding: 5px;
`
